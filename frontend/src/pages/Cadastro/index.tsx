<<<<<<< HEAD
import { useState } from "react";
import {
  Body,
  Input,
  Container,
  TypeStyle,
  GoBack,
  Button,
  NavButton,
} from "../../components/Commons";
import { IoMdArrowBack } from "react-icons/io";

const Cadastro = () => {
  const [userType, setUserType] = useState<"" | "Correntista" | "Emissor">("");
  const [nome, setNome] = useState<String>("");
  const [id, setId] = useState<String>("");
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [passwordAgain, setPasswordAgain] = useState<String>("");

  function handleLogin() {
    console.log({nome, id, email, password, passwordAgain, userType});
  }

  switch (userType) {
    case "":
      return (
        <Body>
          <Container style={{ textAlign: "center" }}>
            <NavButton to="/">
              <IoMdArrowBack />
              Voltar
            </NavButton>
            <Button onClick={() => setUserType("Correntista")}>
              Correntista
            </Button>
            <Button onClick={() => setUserType("Emissor")}>Emissor</Button>
          </Container>
        </Body>
      );
    default:
      return (
        <Body>
          <Container>
            <GoBack action={() => setUserType("")} />
            <TypeStyle style={{ textAlign: "center" }}>
              Cadastro {userType}
            </TypeStyle>
            <Input
              label="Nome:"
              value={nome}
              onChange={(e: any) => setNome(e.target.value)}
            />
            <Input
              label="CPF/CNPJ:"
              value={id}
              onChange={(e: any) => setId(e.target.value)}
            />
            <Input
              label="E-mail:"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <Input
              label="Digite sua Senha:"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              type="password"
            />
            <Input
              label="Digine novamente:"
              value={passwordAgain}
              onChange={(e: any) => setPasswordAgain(e.target.value)}
              type="password"
            />
            <Button onClick={handleLogin}>Entrar</Button>
          </Container>
        </Body>
      );
  }
};

export default Cadastro;
=======
  import { useState } from "react";
  import {
    Body,
    Input,
    Container,
    TypeStyle,
    GoBack,
    Button,
    NavButton,
  } from "../../components/Commons";
  import { IoMdArrowBack } from "react-icons/io";

  import { api } from "../../services/api.ts"

  const Cadastro = () => {
    const [userType, setUserType] = useState<"" | "Correntista" | "Emissor">("");
    const [name, setName] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordAgain, setPasswordAgain] = useState<string>("");

    function handleSubmit() {
      const formData = new FormData()

      formData.append("name", name)
      formData.append("cpf", cpf )
      formData.append("email", email)
      formData.append("password", password)

      api.post("/users", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      .then(() => console.log("criado com sucesso"))
      .catch(() => console.log("Algo deu errado"));
    }


    switch (userType) {
      case "":
        return (
          <Body>
            <Container style={{ textAlign: "center" }}>
              <NavButton to="/">
                <IoMdArrowBack />
                Voltar
              </NavButton>
              <Button onClick={() => setUserType("Correntista")}>
                Correntista
              </Button>
              <Button onClick={() => setUserType("Emissor")}>Emissor</Button>
            </Container>
          </Body>
        );
      default:
        return (
          <Body>
            <Container>
              <GoBack action={() => setUserType("")} />
              <TypeStyle style={{ textAlign: "center" }}>
                Cadastro {userType}
              </TypeStyle>
              <Input
                label="Nome:"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
              />
              <Input
                label="CPF/CNPJ:"
                value={cpf}
                onChange={(e: any) => setCpf(e.target.value)}
              />
              <Input
                label="E-mail:"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <Input
                label="Digite sua Senha:"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
                type="password"
              />
              <Input
                label="Digine novamente:"
                value={passwordAgain}
                onChange={(e: any) => setPasswordAgain(e.target.value)}
                type="password"
              />
              <Button onClick={handleSubmit}>Entrar</Button>
            </Container>
          </Body>
        );
    }
  };

  export default Cadastro;
>>>>>>> fa8e150843d3796222a6f09c6220533038bed172
