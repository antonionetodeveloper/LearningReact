import styled from "styled-components";

export const Container = styled.div`
	background-color: #fed36a;
	padding: 3vw;
	
	&{
		display: flex;
		flex-direction: column;
		align-items: center;

		p{
			font-size: 4vw;
			font-family: "Valorant";
		}

		text{
			font-family: sans-serif;
			font-weight: 300;
			width: 70vw;
			display: inline;
			a{
				font-family: Arial;
			}
		}
	}
`;