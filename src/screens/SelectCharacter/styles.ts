import styled from "styled-components";

export const ContainerCharacter = styled.div`

background-image: url(/src/assets/images/background.png);
background-position: center;
background-size: cover;
width: 100vw;
height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

`
export const ContainerCarousel = styled.div`
  display: grid;
  grid-auto-flow: column; /* 👈 os itens ficam lado a lado, como colunas */
  grid-auto-columns: 20%; /* 👈 cada item ocupa 100% da largura visível */
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  width: 100%;
  max-height: 600px;
  cursor: grab;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;


  &::-webkit-scrollbar {
   display:none;
  }

 @media (max-width: 768px) {
  grid-auto-columns: 100%;
 }


`

export const ContainerItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
 cursor: grab;
`

export const ImageLapide = styled.img`
width: 100%;


  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  pointer-events: none;
  border-top-right-radius:22%;
  border-top-left-radius:25%;
`

export const ContainerLapide = styled.div`
display: flex;
flex-direction: column;

`
export const BorderUpLapide = styled.div`
display: flex;
align-items: center;
justify-content: center;
border: 1px solid #ffffffff;
width: 70%;
height: 60%;
border-top-right-radius:22%;
border-top-left-radius:25%;
border-bottom: none;
`

export const BorderDown = styled.div`
text-align: center;
border: 1px solid #ffffffff;
width: 80%;
height: 20%;
`
export const OrnamentImage = styled.img`
width: 100%;
position: fixed;
`
