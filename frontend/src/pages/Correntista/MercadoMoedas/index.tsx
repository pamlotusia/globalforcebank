import { Container, NavBody, NavButton } from "../../../components/Commons";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Logo from "../../../assets/gbflogo.png";

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

interface DataType {
  titulo: string;
  rentabilidadeAnual: number;
  investimentoMinimo: number;
  disponibilidade: number;
  vencimento: string;
  simule: string;
}

function createData(
  titulo: string,
  rentabilidadeAnual: number,
  investimentoMinimo: number,
  disponibilidade: number,
  vencimento: string,
  simule: string
) {
  return {
    titulo,
    rentabilidadeAnual,
    investimentoMinimo,
    disponibilidade,
    vencimento,
    simule,
  };
}

const rows = [
  createData("Aracaju", 3, 10, 83214, "01/01/2027", "/"),
  createData("Salvador", 4, 15, 313918444, "01/02/2028", "/"),
  createData("Fortaleza", 5, 12, 780000, "01/03/2029", "/"),
  createData("Recife", 6, 20, 185274999, "01/04/2030", "/"),
  createData("Natal", 7, 18, 95232345, "01/05/2031", "/"),
  createData("Maceió", 3.5, 10, 4456768, "01/06/2027", "/"),
  createData("João Pessoa", 4.5, 14, 987655432, "01/07/2028", "/"),
  createData("São Luís", 5.5, 16, 125672, "01/08/2029", "/"),
  createData("Teresina", 6.2, 19, 725000000, "01/09/2030", "/"),
  createData("Cuiabá", 7.3, 13, 591234567, "01/10/2031", "/"),
  createData("Campo Grande", 5.7, 17, 48766321, "01/11/2027", "/"),
  createData("Goiânia", 6.8, 15, 912345678, "01/12/2028", "/"),
  createData("Belo Horizonte", 4.9, 10, 2158674, "01/01/2029", "/"),
  createData("Vitória", 6.5, 18, 13876234, "01/02/2030", "/"),
  createData("Rio de Janeiro", 5.2, 12, 823479008, "01/03/2031", "/"),
  createData("São Paulo", 7.8, 20, 756453239, "01/04/2027", "/"),
  createData("Curitiba", 4.1, 14, 69254780, "01/05/2028", "/"),
  createData("Porto Alegre", 5.3, 16, 548923453, "01/06/2029", "/"),
  createData("Florianópolis", 6.7, 13, 235567890, "01/07/2030", "/"),
  createData("Joinville", 4.4, 10, 417896543, "01/08/2031", "/"),
  createData("Uberlândia", 5.9, 19, 62109876, "01/09/2027", "/"),
  createData("Campinas", 7.2, 21, 111222333, "01/10/2028", "/"),
  createData("Ribeirão Preto", 6.3, 17, 75432109, "01/11/2029", "/"),
  createData("Sorocaba", 4.8, 13, 65231000, "01/12/2030", "/"),
  createData("Santos", 5.6, 15, 1398765, "01/01/2031", "/"),
  createData("Osasco", 7.0, 14, 456789012, "01/03/2028", "/"),
  createData("Diadema", 4.7, 16, 987654321, "01/04/2029", "/"),
];

function MercadoRow() {
  return (
    <div>
      {rows.map((row) => (
        <RowInv cardInfo={row}/>
      ))}
    </div>
  )
}
function MercadoTabela() {
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
          {rows.map((row) => (
            <StyledTableRow key={row.titulo}>
              <StyledTableCell component="th" scope="row">
                {row.titulo}
              </StyledTableCell>
              <StyledTableCell align="right">
                Selic + IPCA + {row.rentabilidadeAnual}%
              </StyledTableCell>
              <StyledTableCell align="right">
                R$ {row.investimentoMinimo}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.disponibilidade} cotas
              </StyledTableCell>
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

function MercadoCard() {
  function Card({ cardInfo }: { cardInfo: DataType }) {
    return (
      <div
        style={{
          backgroundColor: "black",
          padding: 15,
          borderRadius: 15,
          width: 320,
        }}
      >
        <h1>{cardInfo.titulo}</h1>
        <table>
          <tbody>
            <th>
              <strong>Rentabilidade anual:</strong>
            </th>
            <td>Selic + IPCA + {cardInfo.rentabilidadeAnual}%</td>
          </tbody>
          <tbody>
            <th>
              <strong>Valor da Cota:</strong>
            </th>
            <td>R$ {cardInfo.investimentoMinimo}</td>
          </tbody>
          <tbody>
            <th>
              <strong>Disponibilidade:</strong>
            </th>
            <td>{cardInfo.disponibilidade} cotas</td>
          </tbody>
          <tbody>
            <th>
              <strong>Vencimento:</strong>
            </th>
            <td>{cardInfo.vencimento}</td>
          </tbody>
        </table>
        <NavButton to={cardInfo.simule}>Simule</NavButton>
      </div>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        gap: 25,
        flexWrap: "wrap",
        maxWidth: 1200,
        justifyContent: "center",
      }}
    >
      {rows.map((row) => (
        <Card cardInfo={row} />
      ))}
    </div>
  );
}

const RowInv = ({ cardInfo }: { cardInfo: DataType }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: 10,
        color: "black",
        display: "flex",
        textAlign: "center",
        padding: 20,
      }}
    >
      <div
        style={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
        }}
      >
        <img src={Logo} alt="" style={{ width: 80 }} />
        <span>{cardInfo.titulo}</span>
        <span>Selic + IPCA + {cardInfo.rentabilidadeAnual}%</span>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <span>Modalidades</span>
        <span></span>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <span>Investimento Min</span>
        <span>R$ {cardInfo.investimentoMinimo},00</span>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <span>Vencimento</span>
        <span></span>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <span>Resgate</span>
        <span></span>
      </div>
    </div>
  );
};

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
        return <MercadoRow />;
      case "card":
        return <MercadoCard />;
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
