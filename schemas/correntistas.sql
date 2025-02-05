CREATE TABLE correntistas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(11) NOT NULL UNIQUE,
    data_nascimento DATE NOT NULL,
    telefone VARCHAR(15),
    email VARCHAR(100) UNIQUE,
    endereco VARCHAR(200),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO correntistas (nome, cpf, data_nascimento, telefone, email, endereco)
VALUES ('emilly', '5555555', '1985-05-05', '9999999999', 'emilly@email.com', 'rua5, numero 5, cidade 5, estado 5' );

SELECT * FROM correntistas;