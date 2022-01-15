import styled from "styled-components";

export const MainStyle = styled.main`

	section.itens{
		margin-top: 10vw;
		display: flex;
		flex-direction: column;
		gap: 2vw;
	}

	section.itens > section{
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 5vw;
	}
`;