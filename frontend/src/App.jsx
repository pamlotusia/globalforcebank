import React, { useEffect, useState } from "react";
import {
  Input,
  Adress,
  DropdownMenu,
  Textarea,
} from "../components/inputs.jsx";
import styled from "./App.module.css";
import axios from "axios";

function App() {
  const [form, setForm] = useState({
    name: "",
    cnpj: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });  
    };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/emitters",
        form
      )
      setForm({ name: "", cnpj: "" });
    } catch (e) {
      console.log("Erro ao enviar os dados.");
    }
  };

  useEffect(() => {
    // Requisição para o backend
    fetch("http://localhost:5000")
      .then((response) => response.text())
      .catch((error) => console.error("Erro:", error));
  }, []);

  return (
    <form className={styled.principal} onSubmit={handleSubmit}>
      <div className={styled.container}>
        <h1>Dados do emissor</h1>
        <Input
          id={"name"}
          name={"name"}
          label={"Nome do emissor"}
          type={"text"}
          value={form.name}
          onChange={handleChange}
        />
        <Input
          id={"cnpj"}
          name={"cnpj"}
          label={"CNPJ"}
          type={"text"}
          value={form.cnpj}
          onChange={handleChange}
        />
        <Input id={"endereco"} label={"Endereço"} type={"text"} />

        <Adress />
        <Input id={"email"} label={"E-mail"} type={"text"} />
        <Input id={"email"} label={"E-mail"} type={"text"} />

        <DropdownMenu />
        <Input id={"cvm"} label={"Registro CVM"} type={"text"} />
        <Textarea />

        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}

export default App;
