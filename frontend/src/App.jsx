import React, { useEffect, useState } from "react";
import {
  Input,
  Adress,
  DropdownMenu,
  Textarea,
} from "../components/inputs.jsx";

import styled from "./App.module.css";

import { api } from "../src/services/api";


function App() {
  const [name, setName] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [endereco, setEndereco] = useState([])
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [categoria, setCategoria] = useState('')
  const [registroCvm, setRegistroCvm] = useState('')
  const [atividade, setAtividade] = useState('')


  function handleSubmit(){
    console.log(name, cnpj)

    api.post('/emitters', {name, cnpj})
    .then(()=> console.log('criado com sucesso'))
    .catch(()=> console.log())
    
  }

  return (
    <form className={styled.principal} >
      <div className={styled.container}>
        <h1>Dados do emissor</h1>
        <Input
          id={"name"}
          label={"Nome do emissor"}
          type={"text"}
          onChange={e => setName(e.target.value)}
        />

        <Input
          id={"cnpj"}
          label={"CNPJ"}
          type={"text"}
          onChange={e => setCnpj(e.target.value)}
        />
        <Input id={"endereco"} label={"Endereço"} type={"text"} />

        <Adress />
        <Input id={"email"} label={"E-mail"} type={"text"} />
        <Input id={"email"} label={"E-mail"} type={"text"} />

        <DropdownMenu />
        <Input id={"cvm"} label={"Registro CVM"} type={"text"} />
        <Textarea />

        <button type='button' onClick={handleSubmit}>Enviar</button>
      </div>
    </form>
  );
}

export default App;
