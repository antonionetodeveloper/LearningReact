import { Container } from "./style";

export let imageWidth;

export default function Agent(props){
	return(
		<Container>
			<div className="description">
				<p>{props.title}</p>
				<text>{props.text}</text>
			</div>
			<img src={props.src} style={{width: props.width+"vw"}}/>
		</Container>
	)
}