import { BorderDown, BorderUpLapide, ContainerLapide } from "./styles"

function Carousel() {
    return (
        <>
            <ContainerLapide>

                <BorderUpLapide >
                    <img style={{ height: "100%", padding:"20%" }} src="https://cdn.britannica.com/22/59822-050-98F24569/Karl-Marx-1870.jpg" alt="" />
                </BorderUpLapide>
                <BorderDown>
                    <h1>Karl Maxs</h1>
                    <p>1883-1883</p>

                </BorderDown>

            </ContainerLapide>
        </>
    )
}

export default Carousel