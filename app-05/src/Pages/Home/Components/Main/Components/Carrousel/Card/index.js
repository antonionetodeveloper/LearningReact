import {Container} from "./styles"
 
export default function Card(props){
	return(
		<Container>
			<img src={props.img}/>
			<p>{props.name}</p>
		</Container>
	);
}