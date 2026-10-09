import { useState } from "react";

export default function Buscador() {
  const [lista, setLista] = useState([
    "manzana",
    "pera",
    "naranja",
    "banana",
    "kiwi",
    "mango",
  ]);

  //queda realizar que la lista filtrada se muestre en el return. Hay que armar un estado con la lista nueva  

  function filtradoElementos(event) {
    const resultado = lista.filter((fruta) => fruta.includes(event.target.value))
    console.log(resultado);
    
  }

  return (
    <div>
      <input
        type="text"
        name="lista"
        id="lista"
        onChange={(event) => filtradoElementos(event)}
      />
      <ul>

      {lista.map((l)=> (
        <li>{l}</li>
      ))}
      </ul>
    </div>
  );
}
