import { Link, useSearchParams } from "react-router-dom"
import { FormMessage } from "./FormMessage"

function Chat() {
    const [params] = useSearchParams()
    const personagem = params.get('personagem')


    return (
        <>
            <Link to={"/"}>Voltar</Link>
            <h1>Nome: {personagem}</h1>
            <FormMessage />
        </>

    )
}
export default Chat