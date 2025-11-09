import Carousel from "./Carousel"
import { ContainerCharacter, OrnamentImage } from "./styles"

function SelectCharacter() {

    return (
        <>
            <ContainerCharacter>
                <OrnamentImage style={{transform: "rotate(180deg)", top:"0"}} src="./src/assets/teste/ornament.png" />
                <h2>Com quem deseja conversar?</h2>
                <Carousel />
                <OrnamentImage style={{bottom:"0"}} src="./src/assets/teste/ornament.png" />
            </ContainerCharacter>

        </>
    )
}

export default SelectCharacter