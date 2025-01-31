import TickPlacementBars from "../../../components/Chart";
import {
  Button,
  Container,
  NavBody,
  TypeStyle,
} from "../../../components/Commons";

const PainelCorrentista = () => {
  return (
    <NavBody>
      <h1 style={{ marginTop: 50, textAlign: "center" }}>
        Painel do Correntista
      </h1>
      <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
          <Container style={{ flex: 1 }}>
            <TypeStyle>Bem-Vindo <strong>Felipe</strong></TypeStyle>
            <TypeStyle>Agência <strong>0001</strong></TypeStyle>
            <TypeStyle>Conta <strong>96547123-3</strong></TypeStyle>
            <TypeStyle>Banco <strong>1234</strong></TypeStyle>
          </Container>
        <div style={{ display: "flex", flexDirection: "row", gap: 25 }}>
          <Container style={{ flex: 1 }}>
            <TypeStyle>Saldo</TypeStyle>
            <TypeStyle>R$ 0,00</TypeStyle>
            <div style={{ display: "flex", gap: 10 }}>
              <Button style={{ flex: 1 }}>Saque</Button>
              <Button style={{ flex: 1 }}>Depósito</Button>
            </div>
          </Container>
          <Container style={{ flex: 1 }}>
            <TypeStyle>Fatura</TypeStyle>
            <TypeStyle>R$ 0,00</TypeStyle>
          </Container>
          <Container style={{ flex: 1 }}>
            <TypeStyle>Moedas</TypeStyle>
            <TypeStyle>0</TypeStyle>
          </Container>
        </div>
        <div>
          <Container style={{ textAlign: "center" }}>
            <TypeStyle>Fluxo Dividendos</TypeStyle>
            <TickPlacementBars />
          </Container>
        </div>
      </div>
    </NavBody>
  );
};

export default PainelCorrentista;
