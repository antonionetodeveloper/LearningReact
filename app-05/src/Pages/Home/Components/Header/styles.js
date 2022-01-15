import styled from "styled-components";

export const HeaderStyle = styled.header`
	background-color: whitesmoke;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 1vw;
	margin-bottom: 3vh;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);

	& > img{
		width: 10%;
	}

	a{
		display: flex;
    align-items: center;
		& > .cart{
			width: 10vw;
			height: 7vw;
			padding: 1vw;
			border: 0px;
			background-color: transparent;
			display: flex;
			align-items: center;
			gap: 1vw;
			position: absolute;
			right: 2vw;
			border-radius: 1vw;
			transition: 0.3s;
		}
		& > .cart:hover{
			background-color: rgba(0, 0, 0, 0.1);
			cursor: pointer;
		}
		.cart > img{
			width: 60%;
		}
		.cart > p{
			font-size: 2vw;
		}
	}
`;
