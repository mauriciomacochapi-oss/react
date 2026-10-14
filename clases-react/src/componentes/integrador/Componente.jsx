import { useState } from "react"

export default function ComponenteIntegrador(){
    //spread operator para el set de los nuevos elementos con el array anterior
    const [elementos, setElementos] = useState([])

    function handleElementos(newElement){
        setElementos(...elementos, newElement)
    }

    
    return(

        <>
            ....
        </>
    )
}