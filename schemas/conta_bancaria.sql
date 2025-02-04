CREATE TABLE conta_bancaria (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    fk_correntista_id UUID NOT NULL REFERENCES correntistas(id) ON DELETE CASCADE,
    fk_banco_id NOT NULL REFERENCES banco(id) ON DELETE CASCADE,
    numero_conta VARCHAR(20) NOT NULL UNIQUE,
    agencia VARCHAR(4) NOT NULL DEFAULT '0001', -- Valor fixo para agência
    tipo_conta VARCHAR(20) NOT NULL CHECK (tipo_conta IN ('corrente', 'poupança', 'salário')),
    saldo NUMERIC(15, 2) NOT NULL DEFAULT 0.00,
    limite_credito NUMERIC(15, 2) DEFAULT 0.00,
    data_abertura DATE NOT NULL DEFAULT CURRENT_DATE,
    data_fechamento DATE,
    status VARCHAR(20) NOT NULL DEFAULT 'ativa' CHECK (status IN ('ativa', 'inativa', 'bloqueada')),
    senha_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);