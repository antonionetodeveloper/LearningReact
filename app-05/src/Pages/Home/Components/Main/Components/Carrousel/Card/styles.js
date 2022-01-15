import styled from "styled-components";

export const Container = styled.div`
	&{
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: white;
		border-radius: 1vw;
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

		:hover{
			cursor: pointer;
		}

		img{
			width: 20vw;
			border-radius: 1vw;
		}
		p{
			font-size: 1.75vw;
			margin-bottom: 1vw;
		}
	}
`;