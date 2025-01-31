import { useState, useContext } from "react";
import { DataContext } from "../../context/DataContext";
import {
  Body,
  Input,
  Container,
  TypeStyle,
  GoBack,
  Button,
  NavButton,
  FormContainer,
} from "../../components/Commons";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { data, setData } = useContext(DataContext);
  const [userType, setUserType] = useState<"" | "Correntista" | "Emissor">("");
  const [user, setUser] = useState<String>("");
  const [password, setPassword] = useState<String>("");

  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Previne o comportamento padrão do navegador
    setData({ ...data, user: user, login: true, userType: userType });
    navigate("/" + userType + "/painel");
    console.log({ user, password, userType });
  };

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
          <FormContainer onSubmit={handleLogin}>
            <GoBack action={() => setUserType("")} />
            <TypeStyle style={{ textAlign: "center" }}>
              Login {userType}
            </TypeStyle>
            <Input
              label="CPF/CNPJ"
              value={user}
              onChange={(e: any) => setUser(e.target.value)}
            />
            <Input
              label="Senha"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              type="password"
            />
            <Button type="submit">Entrar</Button>
          </FormContainer>
        </Body>
      );
  }
};

export default Login;
