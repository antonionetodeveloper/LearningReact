
import { MainStyle } from "./styles";


import backButtonCarrousel from "./Components/Carrousel/Images/back.png"
import nextButtonCarrousel from "./Components/Carrousel/Images/next.png" 

import canecaBatman from "./Images/CanecaBatman.jpg"


import Carrousel from "./Components/Carrousel/";

import Card from "./Components/Card/index"
// ....

export function Main(){
	return(
		<MainStyle>
			<Carrousel
				back={backButtonCarrousel}
				next={nextButtonCarrousel}
			/>

			<section className="itens">
				<section>
					<Card
						img={canecaBatman}
						title="Caneca do Batman"
						price="R$ 49,90"
					/>

					<Card
						img={canecaBatman}
						title="Caneca do Batman"
						price="R$ 49,90"
					/>

					<Card
						img={canecaBatman}
						title="Caneca do Batman"
						price="R$ 49,90"
					/>
				</section>

				<section>
					<Card
						img={canecaBatman}
						title="Caneca do Batman"
						price="R$ 49,90"
					/>

					<Card
						img={canecaBatman}
						title="Caneca do Batman"
						price="R$ 49,90"
					/>

					<Card
						img={canecaBatman}
						title="Caneca do Batman"
						price="R$ 49,90"
					/>
				</section>
			</section>
		</MainStyle>
	);
}