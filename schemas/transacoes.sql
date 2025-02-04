CREATE TABLE transacoes (
    descricao VARCHAR(200),
    fk_conta_origem_id UUID REFERENCES conta_bancaria(id) ON DELETE SET NULL,
    fk_conta_destino_id UUID REFERENCES conta_bancaria(id) ON DELETE SET NULL,
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tipo VARCHAR(20) NOT NULL CHECK (tipo IN ('deposito', 'saque', 'transferencia', 'pagamento')),
    valor NUMERIC(15, 2) NOT NULL,
    data_transacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);