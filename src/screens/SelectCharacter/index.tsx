import { Link } from "react-router-dom"
import Carousel from "./Carousel"
import { ContainerCharacter, OrnamentImage } from "./styles"

function SelectCharacter() {

    return (
        <>
            <ContainerCharacter>
                <OrnamentImage style={{transform: "rotate(180deg)", top:"0"}} src="./src/assets/teste/ornament.png" />
                <h2 style={{fontSize:"2rem", textAlign: "center", marginBottom:"10%"}}>Com quem deseja conversar?</h2>
                <Carousel />
                <OrnamentImage style={{bottom:"0"}} src="./src/assets/teste/ornament.png" />
             
                <Link to={"/chat"}>Conversar</Link>
            </ContainerCharacter>
        </>
    )
}

export default SelectCharacter