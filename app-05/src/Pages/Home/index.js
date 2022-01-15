import { Body } from "./styles";

import { Header } from "./Components/Header/index";
import { Main } from "./Components/Main/index";
import { Footer } from "../Assets/Footer/index";

export default function Home(){
	return(
		<Body>
			<Header/>
			<Main  />
			<Footer/>
		</Body>
	);
}