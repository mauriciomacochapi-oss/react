export default function TargetaPelicula(props){

    const {titulo, año, vista} = props 
    return(

        <>
        <h1>
            {titulo}
        </h1>
        <><h1>
            {año}
        </h1></>
        <h1>
            {vista === true ? "✓" : "" }
        </h1>

        </>

    );

}
