-- Criando o banco de dados
do $$
begin
    create database gfbdb;
exception when others then
    raise notice 'Banco de dados já existe';
end $$;

-- Conectando ao banco de dados
\c gfbdb

-- Tabela para usuários correntistas
CREATE TABLE correntistas (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela para usuários emissores
CREATE TABLE emissores (
    id SERIAL PRIMARY KEY,
    password VARCHAR(100) NOT NULL,
    nome_emissor VARCHAR(200) NOT NULL,
    cnpj VARCHAR(18) NOT NULL, -- Formato: 00.000.000/0000-00
    endereco_rua VARCHAR(200) NOT NULL,
    endereco_numero VARCHAR(10),
    endereco_complemento VARCHAR(100),
    endereco_cep VARCHAR(9) NOT NULL, -- Formato: 00000-000
    endereco_cidade VARCHAR(100) NOT NULL,
    endereco_estado VARCHAR(2) NOT NULL, -- UF
    email_contato VARCHAR(200) NOT NULL,
    telefone_contato VARCHAR(15) NOT NULL, -- Formato: (00) 00000-0000
    categoria_emissor VARCHAR(50) NOT NULL, -- Dropdown: Sociedade Anônima, Sociedade Limitada, Outros
    registro_cvm VARCHAR(50), -- Opcional
    atividade_principal TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela para investimentos
CREATE TABLE investments (
    id SERIAL PRIMARY KEY,
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
    fk_emisser INT REFERENCES emissores(id) ON DELETE CASCADE, -- Emissor do investimento
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela para fragmentos de investimento
CREATE TABLE investment_fragments (
    id SERIAL PRIMARY KEY,
    investment_id INT REFERENCES investments(id) ON DELETE CASCADE,
    fragment_number INT NOT NULL, -- Identificador único do fragmento
    owner_id INT REFERENCES correntistas(id), -- Correntista que comprou o fragmento
    purchased_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (investment_id, fragment_number)
);

-- Tabela para transações
CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    fragment_id INT REFERENCES investment_fragments(id) ON DELETE CASCADE,
    buyer_id INT REFERENCES correntistas(id) ON DELETE SET NULL, -- Correntista comprador
    seller_id INT REFERENCES correntistas(id) ON DELETE SET NULL, -- Correntista vendedor (se aplicável)
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    amount NUMERIC(10, 2) NOT NULL -- Valor da transação
);

-- Exemplo de consulta para criar um novo investimento
--
-- INSERT INTO investments (codigo_emissao, tipo_debenture, data_emissao, data_vencimento, valor_nominal_unitario, quantidade_debentures, remuneracao, periodicidade_pagamento, issuer_id)
-- VALUES ('ABC123', 'Simples', '2025-01-01', '2030-01-01', 1000.00, 1000, 'Juros Fixos', 'Anual', 1);

-- Exemplo de fragmentação de investimentos ao criar um novo
-- DO $$
-- BEGIN
--     FOR i IN 1..1000 LOOP -- Criar 1000 fragmentos
--         INSERT INTO investment_fragments (investment_id, fragment_number)
--         VALUES (currval(pg_get_serial_sequence('investments', 'id')), i);
--     END LOOP;
-- END $$;

