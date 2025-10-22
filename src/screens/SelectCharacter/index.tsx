import { useState } from "react"
import Carousel from "./Carousel"
import { ContainerCharacter } from "./styles"

function SelectCharacter() {
    const [characters, setCharacters] = useState()

    return (
        <><ContainerCharacter>
            <h2>Com quem deseja conversar?</h2>
            <Carousel />
        </ContainerCharacter>

        </>
    )
}

export default SelectCharacter