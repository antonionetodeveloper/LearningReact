import { Link } from "react-router-dom";

import { HeaderStyle} from "./styles";
import logo from "./Images/logo.png"
import carrinho from "./Images/carrinho.png"



export function Header(props){
	return(
		<HeaderStyle>
			<img src={logo} alt=""/>
			<h1>YourCaneca</h1>
				<Link to={"/Carrinho"}>
					<button className="cart">
						<img src={carrinho} className="cart" alt=""/>
						<p>0</p>
					</button>
				</Link>
		</HeaderStyle>
	);
}