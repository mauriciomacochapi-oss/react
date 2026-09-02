//Para instalar dependencias (node_modules) hacer bun install
//Para correr el proyecto bun run dev

import "./App.css";
import Persona from "./componentes/Persona";
import Perfil from "./componentes/Perfil";
import TargetaPelicula from "./componentes/TargetaPelicula";

//### Ejercicio 2.5 — Lista desde array
//Tenés este array de películas:

const peliculas = [
  { id: 1, titulo: "Interstellar", año: 2014, vista: false },
  { id: 2, titulo: "The Dark Knight", año: 2008, vista: true },
  { id: 3, titulo: "Inception", año: 2010, vista: false },
  { id: 4, titulo: "Oppenheimer", año: 2023, vista: true },
];

function App() {
  return (
    <>
      <div>
        <Persona />
        <Perfil nombre="Mauri" lenguajes={["JavaScript", "React", "CSS"]} />
      </div>
      <div>
        {peliculas.map((pelicula) => (
          <TargetaPelicula titulo={pelicula.titulo} año={""} vista={""} />
        ))}
      </div>
    </>
  );
}

export default App;
