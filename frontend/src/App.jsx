import React, { useEffect, useState } from "react";
import {
  Input,
  DropdownMenu,
  Checkbox,
  Textarea,
  Issuedate,
} from "../components/inputs.jsx";

import styled from "./App.module.css";
import { format } from "date-fns";

import { api } from "../src/services/api";

function App() {
  const [name, setName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [typeEmisser, setTypeEmisser] = useState("");
  const [typeDebenture, setTypeDebenture] = useState("");
  const [typePayment, setTypePayment] = useState("");
  const [typeGuarantees, setTypeGuarantees] = useState("");
  const [registroCvm, setRegistroCvm] = useState("");
  const [atividade, setAtividade] = useState("");
  const [amortizacao, setAmortizacao] = useState("");
  const [guarantees, setGuarantees] = useState('')
  const [purposeCapture, setPurposeCapture] = useState("");
  const [unitValue, setUnitValue] = useState('')
  const [debenturesEmitidas, setDebenturesEmitidas] = useState('')

  const dropdownEmisser = [
    {
      "Dados do emissor": ["Sociedade Anônima", "Sociedade Limitada", "Outros"],
    },
  ];

  const dropdownTypeDebenture = [
    {
      "Tipo de Debênture": ["Simples", "Conversível", "Permutável"],
    },
  ];
  const dropdownPaymentFrequency = [
    {
      Remuneração: ["Juros Fixos", "IPCA", "CDI", "Outros"],
    },
  ];
  const dropdownGuaranteesOffered = [
    {
      " Periodicidade de Pagamento": ["Mensal", "Semestral", "Anual"],
    },
  ];

  const [riskFiles, setRiskFiles] = useState({
    mercado: null,
    liquidez: null,
    tecnologicos: null,
    regulatorios: null,
    garantias: null,
  });

  function handleSubmit() {
    const formData = new FormData();

    // Adicionar os campos de texto no FormData
    formData.append("name", name);
    formData.append("cnpj", cnpj);
    formData.append("email", email);
    formData.append("tel", tel);
    formData.append("typeEmisser", typeEmisser);
    formData.append("typeDebenture", typeDebenture);
    formData.append("typePayment", typePayment);
    formData.append("typeGuarantees", typeGuarantees);
    formData.append("rua", rua);
    formData.append("numero", numero);
    formData.append("complemento", complemento);
    formData.append("cep", cep);
    formData.append("cidade", cidade);
    formData.append("estado", estado);
    formData.append("registroCvm", registroCvm);
    formData.append("atividade", atividade);
    formData.append("amortizacao", amortizacao);
    formData.append("purposeCapture", purposeCapture);
    formData.append('valor_unitario', unitValue)
    formData.append('garantias_oferecidas', guarantees)
    formData.append('debentures_emitidas', debenturesEmitidas)

    // Adicionar os arquivos no FormData
    if (riskFiles.mercado) formData.append("risks_mercado", riskFiles.mercado);
    if (riskFiles.liquidez)
      formData.append("risks_liquidez", riskFiles.liquidez);
    if (riskFiles.tecnologicos)
      formData.append("risks_tecnologicos", riskFiles.tecnologicos);
    if (riskFiles.regulatorios)
      formData.append("risks_regulatorios", riskFiles.regulatorios);
    if (riskFiles.garantias)
      formData.append("risks_garantias", riskFiles.garantias);
    api
      .post("/emitters", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => console.log("criado com sucesso"))
      .catch(() => console.log("Algo deu errado"));
  }

  function date() {
    const today = new Date();
    const formattedDate = format(today, "dd/MM/yyyy");
    setName(formattedDate);
  }

  return (
    <form className={styled.principal}>
      <div className={styled.container}>
        <h2>Dados do emissor</h2>
        <Input
          id={"name"}
          label={"Nome do emissor"}
          type={"text"}
          // onClick={date}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          id={"cnpj"}
          label={"CNPJ"}
          type={"text"}
          onChange={(e) => setCnpj(e.target.value)}
        />

        <Input
          id="rua"
          label="Rua"
          type="text"
          onChange={(e) => setRua(e.target.value)}
        />

        <Input
          id="numero"
          label="Número"
          type="text"
          onChange={(e) => setNumero(e.target.value)}
        />

        <Input
          id="complemento"
          label="Complemento"
          type="text"
          onChange={(e) => setComplemento(e.target.value)}
        />

        <Input
          id="cep"
          label="CEP"
          type="text"
          onChange={(e) => setCep(e.target.value)}
        />

        <Input
          id="cidade"
          label="Cidade"
          type="text"
          onChange={(e) => setCidade(e.target.value)}
        />

        <Input
          id="estado"
          label="Estado"
          type="text"
          onChange={(e) => setEstado(e.target.value)}
        />

        <Input
          id={"email"}
          label={"E-mail"}
          type={"text"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          id={"tel"}
          label={"Telefone"}
          type={"text"}
          onChange={(e) => setTel(e.target.value)}
        />

        <DropdownMenu
          value={typeEmisser}
          onChange={(value) => setTypeEmisser(value)}
          items={dropdownEmisser}
        />

        <Input
          id={"cvm"}
          label={"Registro CVM"}
          type={"text"}
          onChange={(e) => setRegistroCvm(e.target.value)}
        />
        <Textarea onChange={(e) => setAtividade(e.target.value)} />
      </div>

      <div className={styled.container}>
        <h2>Detalhes da emissão</h2>
        <p>
          Campos específicos das características financeiras e operacionais da
          emissão.
        </p>


{/* gerar codigo automatico uuid*/}
        <Input label="Código de Emissão" onChange={ e => setCodigoEmissao(uuidv4)}/>{" "}

        <DropdownMenu
          value={typeDebenture}
          onChange={(value) => setTypeDebenture(value)}
          items={dropdownTypeDebenture}
        />
        <Issuedate />

        {/* pegar data e mandar para banco*/}
        <Input type="date" label="Data de Vencimento" />

        <Input type="text" label="Valor Nominal Unitário " 
        onChange={(e)=> setUnitValue(e.target.value)
        }/>
        <Input type="text" label=" Quantidade de Debêntures Emitidas" 
        onChange={e => setDebenturesEmitidas(e.value.target)}/>
        <DropdownMenu
          value={typePayment}
          onChange={(value) => setTypePayment(value)}
          items={dropdownPaymentFrequency}
        />
        <DropdownMenu
          value={typeGuarantees}
          onChange={(value) => setTypeGuarantees(value)}
          items={dropdownGuaranteesOffered}
        />
        <Input type="text" label="Garantias Oferecidas" 
        onChange={(e)=> setGuarantees(e.target.value)}/>

        <Input type="text" label="Finalidade da Captação" 
        onChange={(e)=> setPurposeCapture(e.targte.value)}/>
        <Checkbox value={amortizacao} onChange={setAmortizacao} />
      </div>

      <div className={styled.container}>
        <h2>
          Seção para inclusão dos riscos associados à emissão e operação das
          debêntures.
        </h2>

        <p>Envie os arquivos necessários.</p>

        <Input
          type="file"
          label="Riscos de Mercado"
          onChange={(e) =>
            setRiskFiles({ ...riskFiles, mercado: e.target.files[0] })
          }
        />
        <Input
          type="file"
          label="Riscos de Liquidez"
          onChange={(e) =>
            setRiskFiles({ ...riskFiles, liquidez: e.target.files[0] })
          }
        />
        <Input
          type="file"
          label="Riscos Tecnológicos"
          onChange={(e) =>
            setRiskFiles({ ...riskFiles, tecnologicos: e.target.files[0] })
          }
        />
        <Input
          type="file"
          label="Riscos Regulatórios"
          onChange={(e) =>
            setRiskFiles({ ...riskFiles, regulatorios: e.target.files[0] })
          }
        />
        <Input
          type="file"
          label="Descrição das Garantias"
          onChange={(e) =>
            setRiskFiles({ ...riskFiles, garantias: e.target.files[0] })
          }
        />
      </div>

      <button type="button" onClick={handleSubmit}>
        Enviar
      </button>
    </form>
  );
}

export default App;
