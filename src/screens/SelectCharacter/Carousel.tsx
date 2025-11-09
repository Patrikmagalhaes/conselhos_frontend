import { useEffect, useState, useRef } from "react"
import { BorderDown, BorderUpLapide, ContainerCarousel, ContainerItem, ContainerLapide, ImageLapide } from "./styles"

function Carousel() {''
    const [datas, setDatas] = useState([])
    const carousel = useRef<HTMLDivElement| null>(null)
    useEffect(() => {

        fetch("http://localhost:5173/src/assets/teste/teste.json")
            .then((response) => response.json())
            .then(data => setDatas(data))
    }, [])

    const handleLeftClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log(carousel.current!.offsetWidth)
        carousel.current!.scrollLeft += carousel.current!.offsetWidth
    }
    const handleRightClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
       console.log(carousel.current!.offsetWidth)
       carousel.current!.scrollLeft -= carousel.current!.offsetWidth
    }
    return (
        <>
            <ContainerCarousel ref={carousel}>
                {datas.map((item) => {
                    const { data, nome, image } = item

                    return (
                        <ContainerLapide>
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
            </ContainerCarousel>
            <button onClick={handleLeftClick}>left</button>
            <button onClick={handleRightClick}>right</button>
        </>
    )
}

export default Carousel