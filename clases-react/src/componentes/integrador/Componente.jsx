import { useState } from "react"

export default function ComponenteIntegrador(){
    //spread operator para el set de los nuevos elementos con el array anterior
    const [elementos, setElementos] = useState([])

    function handleElementos(newElement){
        setElementos(...elementos, newElement)
    }

    function handleInput(inputValue){
        
    }
    

    //placeholder es la entrada de texto que esta dentro dentro del input
    return(

        <>
            <div>
                <input type="text" placeholder="ingreso de tareas" />
                <button onClick={(elemento) => handleElementos(elemento) }>Agregar tarea</button>
                <input type="checkbox" />
                <button> X </button>
            </div>
           
        </>
    )
}  
    //si esta marcado es true sino esta marcado es false
    //checkbox es como un placeholder solo que en ves de mostrar 
    //una entrada de texto, podes marcar opciones dependiendo de
    //las que haya