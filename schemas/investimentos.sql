CREATE TABLE investimentos(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    fk_emissor INT REFERENCES emissores(id) ON DELETE CASCADE,
    area_categoria VARCHAR(50) NOT NULL, -- Emissor do investimento
    produto_tipo VARCHAR(50) NOT NULL, --produto/tipo
    local VARCHAR(100) NOT NULL, 
    data_emissao DATE NOT NULL,
    data_vencimento DATE NOT NULL,
    imposto_renda VARCHAR(50) NOT NULL,
    segurador VARCHAR(50) NOT NULL, 
    re_segurador VARCHAR(50) NOT NULL,
    numero_apolice VARCHAR(50) NOT NULL,
    numero_subapolice VARCHAR(50) NOT NULL,
    valor_unitario NUMERIC(15, 2) NOT NULL, --valor minímo por investimento
    remuneracao VARCHAR(50) NOT NULL, -- Dropdown: Juros Fixos, IPCA, CDI, Outros
    rentabilidade -NUMERIC(5,2) NOT NULL -- porcentagem da rentabilidade %
    tipo_debenture VARCHAR(50) NOT NULL, -- Dropdown: Simples, Conversível, Permutável
    quantidade_debentures INT NOT NULL,
    periodicidade_pagamento VARCHAR(50) NOT NULL, -- Dropdown: Mensal, Semestral, Anual
    liquidez VARCHAR(50) NOT NULL,
    codigo_emissao VARCHAR(50) NOT NULL, -- Código gerado automaticamente ou manual // receita federal - bolsa de valores - ministerio da fazenda
    grau_risco VARCHAR(50) NOT NULL, --grau de risco
    serie VARCHAR(50) NOT NULL, 
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


INSERT INTO investimentos 
(fk_emissor,
area_categoria,
produto_tipo,
local,
data_emissao,
data_vencimento,
imposto_renda
segurador,
re_segurador,
numero_apolice,
numero_subapolice,
valor_nominal_unitario,
remuneracao,
rentabilidade,
tipo_debenture,
quantidade_debentures,
periodicidade_pagamento,
liquidez,
serie,
codigo_emissao,
grau_risco,
garantias_oferecidas,
finalidade_captacao,
amortizacao_antecipada,
riscos_mercado,
riscos_liquidez,
riscos_tecnologicos,
riscos_regulatorios,
descricao_garantias
)VALUES (
'chavealeatoria'
 'mobiliario',
 'terreno',
 'São Paulo/interior',
 '2025-02-05',
 '2026-02-06',
 'regressivo',
 'Brasilprev',
 'Brasilprev',
 '123a654b987c',
 '000p654b987c',
 1.00,
 'juros fixos',
 15.0,
 'simples',
 10000,
 'anual',
 'diária',
 '1236-9756-52685',
 'baixo',
 'A',
 'file',
 'construção',
 true,
 'file',
 'file',
 'file',
 'file',
 'file'
)

SELECT * FROM investimentos