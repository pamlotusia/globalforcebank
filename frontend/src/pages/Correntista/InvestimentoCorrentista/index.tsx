import { green } from "@mui/material/colors";
import {
  Button,
  Container,
  NavBody,
  NavButton,
  TypeStyle,
} from "../../../components/Commons";
import Table from "../../../components/Table";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const InvestimentoCorrentista = () => {
  return (
    <NavBody>
      <h1 style={{ textAlign: "center" }}>Meus Investimentos</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
        <Container style={{ textAlign: "center" }}>
          <Link to={"/"}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>
                <TypeStyle style={{ fontSize: 25 }}>
                  Total de Investimentos
                </TypeStyle>
                <IoMdArrowForward color="Black" fontSize={25} />
              </div>
              <TypeStyle style={{ fontSize: 30 }}>R$ 132.488,32</TypeStyle>
              <TypeStyle style={{ color: green.A700 }}>
                + R$ 13.248,83 em 12 meses
              </TypeStyle>
            </div>
          </Link>
          <NavButton to="/correntista/mercado">Investir</NavButton>
        </Container>
        <Container>
          <Table />
        </Container>
      </div>
    </NavBody>
  );
};

export default InvestimentoCorrentista;
