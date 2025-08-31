import Personaje from "./components/Personaje"
import logo from "./assets/Dragon_Ball_Z_logo.svg"
import { Button } from "react-bootstrap"

function App() {

  return (
    <main className="container my-5 text-center">
      <img src={logo} alt="Logo de Dragon Ball Z" className="w-50 mb-4" />
      <Personaje></Personaje>
      <Button variant="danger" className="mt-4">Obtener personaje</Button>
    </main>
  )
}

export default App
