import { NavBody, Banner } from "../../components/Commons";
import BannerImg from "../../assets/consultoria.jpg"

const Home = () => {
	return (
		<NavBody>
			<Banner src={BannerImg} />
		</NavBody>
	);
};

export default Home;
