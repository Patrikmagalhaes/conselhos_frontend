import { useEffect, useState } from "react"
import { BorderDown, BorderUpLapide, ContainerCarousel, ContainerItem, ContainerLapide } from "./styles"

function Carousel() {
    const [datas, setDatas] = useState([])

    useEffect(() => {

        fetch("http://localhost:5173/src/assets/teste/teste.json")
            .then((response) => response.json())
            .then(data => setDatas(data))
    }, [])

    return (
        <>
            <ContainerCarousel>
                {datas.map((item) => {
                    const { data, nome, image } = item

                    return (
                        <ContainerLapide>
                            <ContainerItem>
                                <BorderUpLapide>
                                    <img style={{ width: "100%", height: "100%" }} src={image} />
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
        </>
    )
}

export default Carousel