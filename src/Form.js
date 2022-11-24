import { useRef, useState } from "react"

export default function Form(){
    
    const nome= useRef('nome')

    const [mostra, setMostra] = useState("")

    function stampanome(event){

        event.preventDefault()
        console.log(nome.current.value)
        setMostra(nome.current.value)
    
    }
    return(
        <>
            <form>
                <label>Nome: </label>
                <input ref={nome} type='text'/>
                <button onClick={stampanome}>INVIOO</button>
            </form>
            <div>Ti chiami {mostra}</div>
        </>
    )
}