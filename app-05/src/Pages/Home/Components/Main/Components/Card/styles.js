import styled from "styled-components";

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	background-color: white;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
	width: 25vw;
	border-radius: 1vw;


	&{
		img{
			display: flex;
			align-self: center;
			width: 70%;
		}
		div{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin: 1vw;
			p {
				font-size: 1.5vw;
			}
		}

		button {
			margin: 1vw;
			padding: 1vw;
			border: 0;
			font-size: 1.5vw;
			border-radius: 1vw;
			transition: 0.5s;
		}
		button:hover{
			cursor: pointer;
			color: white;
			background-color: rgb(255, 89, 63);
		}
	}
`;