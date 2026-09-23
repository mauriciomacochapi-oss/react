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

  function filtradoElementos(event) {
    console.log(event.target.value);
    
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
