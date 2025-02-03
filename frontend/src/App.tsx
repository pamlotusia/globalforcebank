import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import CadastroEmissor from "./pages/Emissor/Cadastro";
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
				<Route path="/cadastroEmissor" element={<CadastroEmissor />} />
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

