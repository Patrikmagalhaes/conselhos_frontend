export const FormMessage = () => {
    const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <>

            <form onSubmit={sendMessage} action="">
                <input type="text" />
                <button type="submit" >enviar</button>
            </form>

        </>
    )
}