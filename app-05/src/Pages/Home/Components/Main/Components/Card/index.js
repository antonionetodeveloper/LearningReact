import { useState } from "react";
import {Content} from "./styles"


export let itensNum = 1;

export default function Card(props){
	const [itens, setItens] = useState(1)

	function setItensHandle(){
		setItens(itens + 1)
		itensNum = itens
		console.log(itens, itensNum)
	}

	return(
		<Content>
			<img src={props.img} alt=""/>
			<div className="text">
				<p>{props.title}</p>
				<p>{props.price}</p>
			</div>
			<button onClick={() => setItensHandle()}>
				Adicionar no carrinho
			</button>
		</Content>
	);
}