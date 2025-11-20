import {  useNavigate } from "react-router-dom"
import { ContainerCharacter, OrnamentImage } from "./styles"
import { Carousel } from "./Carousel"
import { useState } from "react"

function SelectCharacter() {

    const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null)
    const navigate = useNavigate();

    const startChatting = () => {
        if (!selectedCharacter) return
        navigate(`/chat?personagem=${encodeURIComponent(selectedCharacter)}`);
    }

    return (
        <>
            <ContainerCharacter>
                <OrnamentImage style={{ transform: "rotate(180deg)", top: "0" }} src="./src/assets/teste/ornament.png" />
                <h2 style={{ fontSize: "2rem", textAlign: "center", marginBottom: "10%" }}>Com quem deseja conversar?</h2>
                <Carousel onSelect={setSelectedCharacter} />
                <OrnamentImage style={{ bottom: "0" }} src="./src/assets/teste/ornament.png" />

                <button onClick={startChatting}>Conversar</button>
            </ContainerCharacter>
        </>
    )
}

export default SelectCharacter