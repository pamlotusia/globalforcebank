CREATE TABLE conta_investimentos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    fk_investidor UUID REFERENCES correntistas(id) ON DELETE CASCADE,
    fk_banco UUID REFERENCES banco(id) ON DELETE CASCADE,

    saldo_total NUMERIC(15,2) NOT NULL DEFAULT 0.00,
    valor_aplicado NUMERIC(15,2) NOT NULL DEFAULT 0.00,
    valor_rendimento NUMERIC(15,2) NOT NULL DEFAULT 0.00,
    ultima_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    tipo_conta VARCHAR(50) NOT NULL DEFAULT 'Investimentos' CHECK (tipo_conta = 'Investimentos'),
    status VARCHAR(50) NOT NULL DEFAULT 'Ativa',
    data_abertura DATE NOT NULL DEFAULT CURRENT_DATE,
    data_encerramento DATE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



-- TRIGGER CRIAR CONTA_INVESTIMENTOS
CREATE OR REPLACE FUNCTION public.criar_conta_investimentos()
    RETURNS trigger
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE NOT LEAKPROOF
AS $BODY$
DECLARE
    banco_padrao_id UUID := 'f99aa99c-2abf-4106-98d3-dcd126985d9c'; 
BEGIN
    RAISE NOTICE 'Iniciando criação de conta para o correntista ID: %', NEW.id;

    IF NOT EXISTS (SELECT 1 FROM banco WHERE id = banco_padrao_id) THEN
        RAISE EXCEPTION 'Banco padrão com ID % não encontrado', banco_padrao_id;
    END IF;

    INSERT INTO conta_investimentos (
        fk_investidor,
        fk_banco,
        saldo_total,
        valor_aplicado,
        valor_rendimento,
        tipo_conta,
        status
        data_abertura,
    ) VALUES (
        NEW.id,
        banco_padrao_id,
        0.00,
        0.00,
        0.00,
        'Investimentos'
        'ativa'
        CURRENT_DATE,
    );

    RAISE NOTICE 'Conta bancária criada com sucesso para o correntista ID: %', NEW.id;
    RETURN NEW;
EXCEPTION
    WHEN others THEN
        RAISE EXCEPTION 'Erro ao criar conta bancária: %', SQLERRM;
END;
$BODY$;

ALTER FUNCTION public.criar_conta_investimentos()
    OWNER TO globaluser;
