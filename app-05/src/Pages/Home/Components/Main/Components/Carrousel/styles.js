import styled from "styled-components";

export const Container = styled.section`
	&{
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 2vw;

		section{
			display: flex;
			flex-direction: row;
			gap: 5vw;

			a{
				color: black;
				text-decoration: none;
			}
		}

		button{
			border: 0px;
			padding: 1.5vw;
			border-radius: 100%;
			transition: 0.5s;

			:hover{
				cursor: pointer;
				background-color: rgb(255, 89, 63);
			}
			img{
				width: 2.5vw;
			}
		}
	}


`;