import { useState } from "react";

export default function Buscador() {

  const listaOriginal = ["manzana", "pera", "naranja", "banana", "kiwi", "mango"];
  
  
  const [busqueda, setBusqueda] = useState("");
  
  
  const listaFiltrada = listaOriginal.filter( fruta => fruta.toLowerCase().includes(busqueda.toLowerCase()))

  //queda realizar que la lista filtrada se muestre en el return. Hay que armar un estado con la lista nueva  


  return (
    <div>
      <input
        type="text"
        name="lista"
        id="lista"
        value={busqueda} // Controlamos el input con el estado
        onChange={(event) => setBusqueda(event.target.value)}
        placeholder="Buscar fruta..."
      />
      <ul>
        {listaFiltrada.map((l, index) => (
          <li key={index}>{l}</li> // Recuerda siempre poner una key única
        ))}
      </ul>
    </div>
  );
}
