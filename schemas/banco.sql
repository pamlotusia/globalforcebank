CREATE TABLE banco (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    codigo VARCHAR(4) NOT NULL DEFAULT '1313' UNIQUE, -- Valor fixo para agênciaBrasil)
    nome VARCHAR(50) NOT NULL DEFAULT 'Global Force Bank' UNIQUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);