import { useState } from "react";
import {
  Body,
  Input,
  Container,
  TypeStyle,
  Button,
  Select,
} from "../../../components/Commons";
import { Checkbox } from "@mui/material";

const CadastroEmissor = () => {
  const [nome, setNome] = useState("");
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
  const [guarantees, setGuarantees] = useState("");
  const [purposeCapture, setPurposeCapture] = useState("");
  const [unitValue, setUnitValue] = useState("");
  const [debenturesEmitidas, setDebenturesEmitidas] = useState("");

  function handleLogin() {
    console.log(nome);
  }

  return (
    <Body>
      <Container>
        <div style={{ display: "flex", gap: 25 }}>
          <div style={{display: "flex", flexDirection: "column", gap: 10}}>
            <TypeStyle style={{ textAlign: "center" }}>
              Cadastro Emissor
            </TypeStyle>

            <Input
              label="Nome:"
              value={nome}
              onChange={(e: any) => setNome(e.target.value)}
            />
            <Input
              label="CNPJ:"
              value={cnpj}
              onChange={(e: any) => setCnpj(e.target.value)}
            />
            <Input
              label="E-Mail:"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <Input
              label="Telefone:"
              value={tel}
              onChange={(e: any) => setTel(e.target.value)}
            />
            <Input
              label="Rua:"
              value={rua}
              onChange={(e: any) => setRua(e.target.value)}
            />
            <Input
              label="Número:"
              value={numero}
              onChange={(e: any) => setNumero(e.target.value)}
            />
            <Input
              label="Complemento:"
              value={complemento}
              onChange={(e: any) => setComplemento(e.target.value)}
            />
            <Input
              label="CEP:"
              value={cep}
              onChange={(e: any) => setCep(e.target.value)}
            />
            <Input
              label="Cidade:"
              value={cidade}
              onChange={(e: any) => setCidade(e.target.value)}
            />
            <Input
              label="Estado:"
              value={estado}
              onChange={(e: any) => setEstado(e.target.value)}
            />
            <Select
              label="Tipo de Emissor:"
              value={typeEmisser}
              onChange={(e: any) => setTypeEmisser(e.target.value)}
            >
              <option value="sa">Sociedade Anônima</option>
              <option value="sl">Sociedade Limitada</option>
              <option value="outros">Outros</option>
            </Select>
            <Input
              label="Registro CVM:"
              value={registroCvm}
              onChange={(e: any) => setRegistroCvm(e.target.value)}
            />
            <Input
              label="Atividade:"
              value={atividade}
              onChange={(e: any) => setAtividade(e.target.value)}
            />
          </div>
          <div style={{display: "flex", flexDirection: "column", gap: 10}}>
            <TypeStyle style={{ textAlign: "center" }}>
              Cadastro Debenture
            </TypeStyle>
            <Select
              label="Tipo de Debênture:"
              value={typeDebenture}
              onChange={(e: any) => setTypeDebenture(e.target.value)}
            >
              <option value="simples">Simples</option>
              <option value="conversivel">Conversível</option>
              <option value="permutavel">Permutável</option>
            </Select>
            <Select
              label="Tipo de pagamento:"
              value={typePayment}
              onChange={(e: any) => setTypePayment(e.target.value)}
            >
              <option value="simples">Simples</option>
              <option value="ipca">IPCA</option>
              <option value="cdi">CDI</option>
              <option value="outros">Outros</option>
            </Select>
            <Select
              label="Tipo de Garantias:"
              value={typeGuarantees}
              onChange={(e: any) => setTypeGuarantees(e.target.value)}
            >
              <option value="simples">Simples</option>
              <option value="ipca">IPCA</option>
              <option value="cdi">CDI</option>
              <option value="outros">Outros</option>
            </Select>
            <div>

            <TypeStyle>Amortização:</TypeStyle>
            <Checkbox/>
            </div>
            <Input
              label="Guarantias:"
              value={guarantees}
              onChange={(e: any) => setGuarantees(e.target.value)}
            />
            <Input
              label="Finalidade da Captação:"
              value={purposeCapture}
              onChange={(e: any) => setPurposeCapture(e.target.value)}
            />
            <Input
              label="Valor Nominal:"
              value={unitValue}
              onChange={(e: any) => setUnitValue(e.target.value)}
            />
            <Input
              label="Quantidade de Debêntures emitidas:"
              value={debenturesEmitidas}
              onChange={(e: any) => setDebenturesEmitidas(e.target.value)}
            />
          </div>
        </div>
        <Button onClick={handleLogin}>Entrar</Button>
      </Container>
    </Body>
  );
};

export default CadastroEmissor;
