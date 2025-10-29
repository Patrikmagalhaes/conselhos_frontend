import styled from "styled-components";

export const ContainerCharacter = styled.div`

background-image: url(/src/assets/images/background.png);
background-position: center;
background-size: cover;
width: 100vw;
height: 100vh;
` 
export const ContainerCarousel = styled.div`
  display: grid;
  grid-auto-flow: column; /* 👈 os itens ficam lado a lado, como colunas */
  grid-auto-columns: 20%; /* 👈 cada item ocupa 100% da largura visível */
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  width: 100%;

@media (max-width: 768px) {
  grid-auto-columns: 100%;
}


`

export const ContainerItem = styled.div`
display: flex;
flex-direction: column;

`

export const ContainerLapide = styled.div`
display: flex;
flex-direction: column;

width: 100%
`
export const BorderUpLapide = styled.div`
display: flex;
align-items: center;
justify-content: center;
border: 1px solid #ffffffff;
width: 100%;
height: 80%;
border-top-right-radius:22%;
border-top-left-radius:25%;
border-bottom: none;
`

export const BorderDown = styled.div`
text-align: center;
padding:2%;
border: 1px solid #ffffffff;
width: 100%;
height: 20%;
`
