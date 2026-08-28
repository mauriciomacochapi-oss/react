//Para instalar dependencias (node_modules) hacer bun install 
//Para correr el proyecto bun run dev 

import './App.css'
import Persona from './componentes/Persona'
import Perfil from './componentes/Perfil'

//### Ejercicio 2.5 — Lista desde array

//Tenés este array de películas:

```jsx
const peliculas = [ "Interestellar", "Batman"];
```

function App() {

  return (
    <>
     <div>
      <Persona/>
      <Perfil nombre="Mauri" lenguajes={["JavaScript", "React", "CSS"]} /> 
     </div>
    </>
  )
}

export default App
