import { Container } from "./style";
import jettVoando from "../../Page/Body/Images/jettVoando.jpg"

export default function Game(){
	return(
		<Container>
			<text>
			⠀⠀⠀⠀Valorant é o projeto da Rito Gomes (a criadora do simulador de skins) 
				juntamente com os russos e argentinos desertores de outros jogos de FPS. 
				É um jogo de tiro """tático"""(com muitas aspas, não me refiro ao jogador) 
				que mais parece um feto abortado do CS:GO e do Overwatch (E provavelmente 
				só jogaram CS:GO na época quando ficou de graça devido ao problema do Dota). 
				Não tem single player, para maximizar o ganho e a venda de skins. O objetivo 
				do jogo é dominar o competitivo dos FPS e destruir o Counter-Strike, mas 
				especialistas dizem que isso não é possível, pois nem a própria Valve conseguiu 
				fazer isso, mesmo que tenha tentado bastante. <br/><br/>⠀⠀⠀⠀Tudo o que sabemos da história 
				é que o jogo se passa na Terra futurista em um futuro não muito distante. 
				Para a alegria das crianças com microfones de rodoviária, o jogo é de grátis 
				e foi lançado no 1° semestre de 2020.
			</text>
			<img src={jettVoando} alt=""/>
		</Container>
	);
}