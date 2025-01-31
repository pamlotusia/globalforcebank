import { Link, useNavigate } from "react-router-dom";
import { Button, NavButton } from "../Commons/index.tsx";
import logo from "../../assets/gbflogo.png";
import { NavContainer } from "./styles.ts";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext.tsx";

const Navbar = () => {
  const { data, setData } = useContext(DataContext);
  const navigate = useNavigate();

  function logOut() {
    setData({});
    navigate("/");
  }

  return (
    <NavContainer>
      <Link to="/">
        <img src={logo} style={{ height: 70, paddingLeft: 40 }} />
      </Link>
      {data.userType === "Correntista" && (
        <div style={{ display: "flex", gap: 20, placeItems: "center" }}>
          <NavButton to={"/correntista/painel"}>Painel</NavButton>
          <NavButton to={"/correntista/investimentos"}>Investimento</NavButton>
          <NavButton to={"/correntista/mercado"}>Mercado de Tokens</NavButton>
        </div>
      )}
      {data.userType === "Emissor" && (
        <div style={{ display: "flex", gap: 20, placeItems: "center" }}>
          <NavButton to={"/emissor/painel"}>Painel</NavButton>
          <NavButton to={"/emissor/investimentos"}>Investimentos</NavButton>
        </div>
      )}
      <div style={{ paddingRight: 40 }}>
        {data.login ? (
          <div style={{ display: "flex", gap: 20, placeItems: "center" }}>
            <div style={{display: "flex", flexDirection: "column"}}>
              <strong style={{ color: "black" }}>{data.userType}</strong>
              <span style={{ color: "black" }}>{data.user}</span>
            </div>
            <Button onClick={logOut}>Sair {">>"}</Button>
          </div>
        ) : (
          <div style={{ display: "flex", gap: 20, placeItems: "center" }}>
            <NavButton to={"/login"}>Entrar</NavButton>
            <NavButton to={"/cadastro"}>Abra sua conta</NavButton>
          </div>
        )}
      </div>
    </NavContainer>
  );
};

export default Navbar;
