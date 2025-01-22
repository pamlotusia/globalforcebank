import React, { useEffect, useState } from "react";
import { Input, DropdownMenu, Textarea } from "../components/inputs.jsx";

import styled from "./App.module.css";

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
  const [categoria, setCategoria] = useState("");
  const [registroCvm, setRegistroCvm] = useState("");
  const [atividade, setAtividade] = useState("");

  function handleSubmit() {
    console.log(
      name,
      cnpj,
      email,
      tel,
      categoria,
      rua,
      numero,
      complemento,
      cep,
      cidade,
      estado,
      registroCvm,
      atividade
    );

    api
      .post("/emitters", {
        name,
        cnpj,
        email,
        tel,
        categoria,
        rua,
        numero,
        complemento,
        cep,
        cidade,
        estado,
        registroCvm,
        atividade,
      })
      .then(() => console.log("criado com sucesso"))
      .catch(() => console.log("Algo deu errad"));
  }

  return (
    <form className={styled.principal}>
      <div className={styled.container}>
        <h1>Dados do emissor</h1>
        <Input
          id={"name"}
          label={"Nome do emissor"}
          type={"text"}
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

<DropdownMenu value={categoria} onChange={(value) => setCategoria(value)} />
        <Input
          id={"cvm"}
          label={"Registro CVM"}
          type={"text"}
          onChange={(e) => setRegistroCvm(e.target.value)}
        />
        <textarea onChange={(e) => setAtividade(e.target.value)}></textarea>

        <button type="button" onClick={handleSubmit}>
          Enviar
        </button>
      </div>
    </form>
  );
}

export default App;
