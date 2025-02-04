--conta investimento que pertence ao correntista. É uma tabela por correntista, não uma tabela geral.

create table conta_investimentos (
id uuid ,
fk_correntista uuid, 
fk_investimento,
investimento_inicial int,
investimento_total int,
rendimento_total,
)