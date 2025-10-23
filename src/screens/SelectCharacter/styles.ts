import styled from "styled-components";
export const ContainerCharacter = styled.div`

background-image: url(/src/assets/images/background.png);
background-position: center;
background-size: cover;
width: 100vw;
height: 100vh;

` 
export const ContainerLapide = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 80%%;
width: 80%;
max-width:500px;


padding: 10px;
`

export const BorderUpLapide = styled.div`
display: flex;
align-items: center;
justify-content: center;
border: 1px solid #ffffffff;
width: 80%;
height: 100%;
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
