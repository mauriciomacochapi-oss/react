export default function Perfil(props) {

    return(
        <>
            <h1>Perfil nombre = {props.nombre}</h1>
        <p>Administrador</p>
        <ul>
            {props.lenguajes.map((lenguaje) => (
                <li>{lenguaje}</li>
            ))}

           
        </ul>

    </>
    )

}