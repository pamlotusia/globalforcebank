import { green } from "@mui/material/colors";
import {
<<<<<<< HEAD
=======
  Button,
>>>>>>> fa8e150843d3796222a6f09c6220533038bed172
  Container,
  NavBody,
  NavButton,
  TypeStyle,
} from "../../../components/Commons";
<<<<<<< HEAD
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  nomeMoeda: string,
  quantidadeMoedas: number,
  totalInvestido: number,
  vencimento: string,
  simule: string
) {
  return {
  nomeMoeda,
  quantidadeMoedas,
  totalInvestido,
  vencimento,
  simule
  };
}

const rows = [
  createData("Aracaju", 10, 100, "01/01/2035", "/"),
];

function TabelaInvestimentos() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Moeda</StyledTableCell>
            <StyledTableCell align="right">Quantidade de Moedas</StyledTableCell>
            <StyledTableCell align="right">Total Investido</StyledTableCell>
            <StyledTableCell align="right">Vencimento</StyledTableCell>
            <StyledTableCell align="right">Simular Retirada</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.nomeMoeda}>
              <StyledTableCell component="th" scope="row">
                {row.nomeMoeda}
              </StyledTableCell>
              <StyledTableCell align="right">{row.quantidadeMoedas}</StyledTableCell>
              <StyledTableCell align="right">R$ {row.totalInvestido},00</StyledTableCell>
              <StyledTableCell align="right">{row.vencimento}</StyledTableCell>
              <StyledTableCell align="right">
                <NavButton to={row.simule}>Simule</NavButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
=======
import Table from "../../../components/Table";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

>>>>>>> fa8e150843d3796222a6f09c6220533038bed172
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
<<<<<<< HEAD
          <TabelaInvestimentos />
=======
          <Table />
>>>>>>> fa8e150843d3796222a6f09c6220533038bed172
        </Container>
      </div>
    </NavBody>
  );
};

<<<<<<< HEAD
export default InvestimentoCorrentista;
=======
export default InvestimentoCorrentista;
>>>>>>> fa8e150843d3796222a6f09c6220533038bed172
