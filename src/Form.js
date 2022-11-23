import { useRef } from "react"
export default function Form(){
    const nome= useRef('nome')
    function stampanome(event){
        event.preventDefault()
        console.log(nome.current.value)
    }
    return(
        <>
            <form>
                <label>Nome: </label>
                <input ref={nome} type='text'/>
                <button onClick={stampanome}>INVIOO</button>
            </form>
            <div>{nome.current.value}</div>
        </>
    )
}