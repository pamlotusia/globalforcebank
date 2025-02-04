import { pool } from "../database/connection.js";

export class InvestmentsController{
    async create(req, res){
        const db = pool

        const files = req.files;
        console.log(files)

        const {
            codigo_emissao ,
            tipo_debenture ,
            data_emissao,
            data_vencimento,
            valor_nominal_unitario,
            quantidade_debentures,
            remuneracao,
            periodicidade_pagamento,
            garantias_oferecidas,
            finalidade_captacao ,
            amortizacao_antecipada,
            fk_emisser 
        } = req.body 

        const insert = `
        INSERT INTO investments (
        codigo_emissao ,
        tipo_debenture ,
        data_emissao,
        data_vencimento,
        valor_nominal_unitario,
        quantidade_debentures,
        remuneracao,
        periodicidade_pagamento,
        garantias_oferecidas,
        finalidade_captacao ,
        amortizacao_antecipada,
        riscos_mercado ,
        riscos_liquidez ,
        riscos_tecnologicos ,
        riscos_regulatorios ,
        descricao_garantias , 
        fk_emisser
        )
        VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16,  $17)
        `

        const values = [
            codigo_emissao ,
            tipo_debenture ,
            data_emissao,
            data_vencimento,
            valor_nominal_unitario,
            quantidade_debentures,
            remuneracao,
            periodicidade_pagamento,
            garantias_oferecidas,
            finalidade_captacao ,
            amortizacao_antecipada,
            files.riscos_mercado[0].filename ,
            files.riscos_liquidez[0].filename ,
            files.riscos_tecnologicos[0].filename ,
            files.riscos_regulatorios[0].filename ,
            files.descricao_garantias[0].filename , 
            fk_emisser
        ]

        try{
            const result = await db.query(insert, values)
            console.log("Investimento cadastrado com sucesso!")
            return res.status(200).json({result})
        }
        catch(e){
            return console.error(e.message)
        }
    }

    async index(req, res){
        const db = pool

        const select = `
        SELECT * FROM investments
        `

        try{
            const { rows } = await db.query(select)
            return res.json( rows )
        }
        catch(e){
            return res.json({"message": e.message})
        }
    }
}