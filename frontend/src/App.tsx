import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
<<<<<<< HEAD
import CadastroEmissor from "./pages/Emissor/Cadastro";
=======
>>>>>>> fa8e150843d3796222a6f09c6220533038bed172
import PainelCorrentista from "./pages/Correntista/PainelCorrentista";
import MercadoMoedas from "./pages/Correntista/MercadoMoedas";
import InvestimentoCorrentista from "./pages/Correntista/InvestimentoCorrentista";
import InvestimentoEmissor from "./pages/Emissor/InvestimentoEmissor";
import PainelEmissor from "./pages/Emissor/PainelEmissor";

const App = () => {
	return (
		<Router>
			<Routes>
				{/*Genérico*/}
				<Route path="/" element={<Home />} />
				<Route path="/sobre" element={<Sobre />} />
				<Route path="/login" element={<Login />} />
				<Route path="/cadastro" element={<Cadastro />} />
<<<<<<< HEAD
				<Route path="/cadastroEmissor" element={<CadastroEmissor />} />
=======
>>>>>>> fa8e150843d3796222a6f09c6220533038bed172
				{/*Correntista*/}
				<Route path="/correntista/investimentos" element={<InvestimentoCorrentista />} />
				<Route path="/correntista/mercado" element={<MercadoMoedas />} />
				<Route path="/correntista/painel" element={<PainelCorrentista />} />
				{/*Emissor*/}
				<Route path="/emissor/administrar-investimento" element={<Home />} />
				<Route path="/emissor/gerar-investimento" element={<Home />} />
				<Route path="/emissor/painel" element={<PainelEmissor />} />
				<Route path="/emissor/investimentos" element={<InvestimentoEmissor />} />
			</Routes>
		</Router>
	);
};

export default App;

