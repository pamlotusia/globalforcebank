import { Container, NavBody, NavButton } from "../../../components/Commons";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import { useState, useEffect } from "react";
import { api } from "../../../services/api";

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

interface Investment {
  titulo: string;
  rentabilidade: string;
  valor_unitario: string;
  vencimento: string;
  remuneracao: string;
  quantidade_debentures: string;
  simule: string;
}

function MercadoTabela() {
  const [investments, setInvestments] = useState<any>([]);

  useEffect(()=> {
    api.get('/investments')
    .then(response => {
      setInvestments(response.data)
    })
    .catch(error => {
      console.error(error)
    })
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Título</StyledTableCell>
            <StyledTableCell align="right">Rentabilidade anual</StyledTableCell>
            <StyledTableCell align="right">Valor da Cota</StyledTableCell>
            <StyledTableCell align="right">Disponibilidade</StyledTableCell>
            <StyledTableCell align="right">Vencimento</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {investments.map((investment) => (
            <StyledTableRow key={investment.titulo}>
              <StyledTableCell component="th" scope="row">
                {investment.titulo}
              </StyledTableCell>
              <StyledTableCell align="right">
                {investment.rentabilidade}
              </StyledTableCell>
              <StyledTableCell align="right">
                {investment.valor_unitario}
              </StyledTableCell>
              <StyledTableCell align="right">
                {investment.quantidade_debentures}
              </StyledTableCell>
              <StyledTableCell align="right">{investment.vencimento}</StyledTableCell>
              <StyledTableCell align="right">
                <NavButton to={investment.simule}>Simule</NavButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function MercadoCard() {
  const [investments, setInvestments] = useState<any[]>([]);

  useEffect(()=> {
    api.get('/investments')
    .then(response => {
      setInvestments(response.data)
    })
    .catch(error => {
      console.error(error)
    })
  }, []) 


  function Card({ cardInfo }: { cardInfo: Investment }) {
    return (
      <div style={{ backgroundColor: "black", padding: 15, borderRadius: 15, width: 320 }}>
        <h1>{cardInfo.titulo}</h1>
        <table>
          <tbody>
            <th><strong>Rentabilidade anual:</strong></th>
            <td>{cardInfo.rentabilidade}</td>
          </tbody>
          <tbody>
            <th><strong>Valor Unitário:</strong></th>
            <td>{cardInfo.valor_unitario}</td>
          </tbody>
          <tbody>
            <th><strong>Disponibilidade:</strong></th>
            <td>{cardInfo.quantidade_debentures}</td>
          </tbody>
          <tbody>
            <th><strong>Vencimento:</strong></th>
            <td>{cardInfo.vencimento}</td>
          </tbody>
        </table>
        <NavButton to={cardInfo.simule}>Simule</NavButton>

      </div>
    )
  }
  return (
    <div style={{ display: "flex", gap: 25, flexWrap: "wrap", maxWidth: 1200, justifyContent: "center" }}>
      {investments.map((investment) => (
        <Card cardInfo={investment} />
      ))}
    </div>
  )
}

const MercadoMoedas = () => {
  const [viewMode, setViewMode] = useState<string>("table");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setViewMode((event.target as HTMLInputElement).value);
  };

  function RowRadioButtonsGroup() {
    return (
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          style={{ justifyContent: "center" }}
          value={viewMode}
          onChange={handleRadioChange}
        >
          <FormControlLabel
            value="table"
            control={<Radio />}
            label="Ver Tabela"
            style={{ color: "black" }}
          />
          <FormControlLabel
            value="card"
            control={<Radio />}
            label="Ver Cards"
            style={{ color: "black" }}
          />
        </RadioGroup>
      </FormControl>
    );
  }

  function SwtichBody() {
    switch (viewMode) {
      case "table":
        return <MercadoTabela />;
      case "card":
        return <MercadoCard />
    }
  }

  return (
    <NavBody>
      <h1 style={{ marginTop: 50, textAlign: "center" }}>Mercado de Tokens</h1>
      <Container>
        <RowRadioButtonsGroup />
        <SwtichBody />
      </Container>
    </NavBody>
  );
};

export default MercadoMoedas;
