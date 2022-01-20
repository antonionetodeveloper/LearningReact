import styled from "styled-components";

export const Container = styled.section`

&{
		margin-top: 8vw;
		margin-bottom: 15vw;
		display: flex;
		justify-content: center;
		gap:5vw;
		background-color: #ECE8E1;
		color: #0F1923;

		text{
			font-family: sans-serif;
			font-weight: 300;
			font-size: 1.3vw;
			width: 40vw;
			text-align: justify;
		}

		img{
			width: 40vw;
			position: relative;
			top: 2vw;
			box-shadow: 3vw 2vw #8B978F;
		}
	}
`;