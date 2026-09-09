import { useState } from "react";

export default function Acordeon(props){
    const {titulo, contenido} = props 

    const [abierto, setAbierto] = useState(true)

    function toggle(){
        setAbierto(!abierto)
    }

    return (
        <div>
            <button title={titulo} onClick={toggle}>
                {titulo}
            </button>
        {abierto === true ? contenido : ""}
        </div>
    );
}