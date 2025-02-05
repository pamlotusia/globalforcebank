CREATE TABLE investimentos(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    fk_emissor INT REFERENCES emissores(id) ON DELETE CASCADE,
    area_categoria VARCHAR(50) NOT NULL, -- Emissor do investimento
    produto_tipo VARCHAR(50) NOT NULL, --produto/tipo
    local VARCHAR(100) NOT NULL, 
    data_emissao DATE NOT NULL,
    data_vencimento DATE NOT NULL,
    segurador VARCHAR(50) NOT NULL, 
    re_segurador VARCHAR(50) NOT NULL,
    numero_apolice VARCHAR(50) NOT NULL,
    numero_subapolice VARCHAR(50) NOT NULL,
    valor_nominal_unitario NUMERIC(15, 2) NOT NULL, --valor minímo por investimento
    remuneracao VARCHAR(50) NOT NULL, -- Dropdown: Juros Fixos, IPCA, CDI, Outros
    rentabilidade -NUMERIC(5,2) NOT NULL -- porcentagem da rentabilidade %
    tipo_debenture VARCHAR(50) NOT NULL, -- Dropdown: Simples, Conversível, Permutável
    quantidade_debentures INT NOT NULL,
    periodicidade_pagamento VARCHAR(50) NOT NULL, -- Dropdown: Mensal, Semestral, Anual
    liquidez VARCHAR(50) NOT NULL,
    serie VARCHAR(50) NOT NULL, 
    codigo_emissao VARCHAR(50) NOT NULL, -- Código gerado automaticamente ou manual // receita federal - bolsa de valores - ministerio da fazenda
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