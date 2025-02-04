create table conta_bancaria (
    id UUID DEFAULT gen_random_uuid(),
    numero_conta VARCHAR(20) NOT NULL UNIQUE,
    agencia VARCHAR(7) NOT NULL,
    tipo_conta VARCHAR(20) NOT NULL CHECK(tipo_conta IN ("Corrente", "Internacional", "Investidor")),
    saldo NUMERIC(15,2) NOT NULL DEFAULT 0.00,
    status VARCHAR(20) NOT NULL DEFAULT 'ativa' CHECK(status IN "ativa", "inativa", "bloqueado"),
    senha_hash VARCHAR(255) NOT NULL,
    fk_cliente_id UUID NOT NULL REFERENCES clientes(id) ON DELETE CASCADE,
    fk_banco_id UUID UNIQUE NOT NULL REFERENCES banco(id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    )

    CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_updated_at
BEFORE UPDATE ON conta_bancaria
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();