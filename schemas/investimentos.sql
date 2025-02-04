CREATE TABLE investimentos(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    fk_emissor INT REFERENCES emissores(id) ON DELETE CASCADE, -- Emissor do investimento
    codigo_emissao VARCHAR(50) NOT NULL, -- Código gerado automaticamente ou manual // receita federal - bolsa de valores - ministerio da fazenda
    tipo_debenture VARCHAR(50) NOT NULL, -- Dropdown: Simples, Conversível, Permutável
    data_emissao DATE NOT NULL,
    data_vencimento DATE NOT NULL,
    valor_nominal_unitario NUMERIC(15, 2) NOT NULL, --valor minímo por investimento
    quantidade_debentures INT NOT NULL,
    remuneracao VARCHAR(50) NOT NULL, -- Dropdown: Juros Fixos, IPCA, CDI, Outros
    periodicidade_pagamento VARCHAR(50) NOT NULL, -- Dropdown: Mensal, Semestral, Anual
    garantias_oferecidas TEXT, --file
    finalidade_captacao TEXT, 
    amortizacao_antecipada BOOLEAN DEFAULT FALSE,
    riscos_mercado TEXT,
    riscos_liquidez TEXT,
    riscos_tecnologicos TEXT,
    riscos_regulatorios TEXT,
    descricao_garantias TEXT, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);