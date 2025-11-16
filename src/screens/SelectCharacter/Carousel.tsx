import { useEffect, useState, useRef } from "react"
import { ArrowImage, BorderDown, BorderUpLapide, ContainerCarousel, ContainerItem, ContainerLapide, ImageLapide } from "./styles"

function Carousel() {

    const [datas, setDatas] = useState([])
    const carousel = useRef<HTMLDivElement | null>(null)
    useEffect(() => {

        fetch("http://localhost:5173/src/assets/teste/teste.json")
            .then((response) => response.json())
            .then(data => setDatas(data))
    }, [])

    const handleLeftClick = (e: React.MouseEvent<HTMLImageElement>) => {
        e.preventDefault()
        console.log(carousel.current!.offsetWidth)

        carousel.current!.scrollLeft += carousel.current!.offsetWidth //entender como isso funciona
    }
    const handleRightClick = (e: React.MouseEvent<HTMLImageElement>) => {
        e.preventDefault()
        console.log(carousel.current!.offsetWidth)
        carousel.current!.scrollLeft -= carousel.current!.offsetWidth
    }

    const selecteCharacter = (nome: never) => {
        console.log(nome)
    }
    return (
        <>
            <ContainerCarousel ref={carousel} >
                <ArrowImage onClick={handleLeftClick} style={{ transform: "rotate(180deg)" }} src="./src/assets/images/arrow.png" alt="Flecha Direita" />
                {datas.map((item) => {
                    const { data, nome, image } = item

                    return (
                        <ContainerLapide onClick={()=>selecteCharacter(nome)}>
                            <ContainerItem>
                                <BorderUpLapide>
                                    <ImageLapide style={{ width: "100%", height: "100%" }} src={image} />
                                </BorderUpLapide>
                                <BorderDown>
                                    <h1>{nome}</h1>
                                    <p>{data}</p>
                                </BorderDown>
                            </ContainerItem>
                        </ContainerLapide>
                    )
                })
                }

                <ArrowImage onClick={handleRightClick} style={{ right: "0" }} src="./src/assets/images/arrow.png" alt="Flecha Direita" />
            </ContainerCarousel>


        </>
    )
}

export default Carousel