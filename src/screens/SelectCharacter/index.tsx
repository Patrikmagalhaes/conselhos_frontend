import { useState } from "react"
import Carousel from "./Carousel"

function SelectCharacter() {
    const [characters, setCharacters] = useState()
    
    return (
        <>
        
            <Carousel />
        </>
    )
}

export default SelectCharacter