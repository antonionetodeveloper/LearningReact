import Card from "./Card/";
import { Container } from "./styles";

import canecaBatman from "../../Images/CanecaBatman.jpg"

export default function carrousel(props){
	return(
		<Container>
			<button><img src={props.back}/></button>
			<section className="Cards">
				<Card img={canecaBatman} name="Caneca do Batman"/>
				<Card img={canecaBatman} name="Caneca do Batman"/>
				<Card img={canecaBatman} name="Caneca do Batman"/>
			</section>
			<button><img src={props.next}/></button>
		</Container>
	);
}