import Personaje from "./components/Personaje";
import logo from "./assets/Dragon_Ball_Z_logo.svg";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

function App() {
  // Guardo los datos en un estado
  const [dataPersonaje, setDatoPersonaje] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    consultaAPI();
  }, []); // los corchetes vacios indican que se  ejecuta solo en montaje, no en actualización

  const consultaAPI = async () => {
    try {
      // aqui van todas las lineas de código que quiero

      setLoading(true)
      const respuesta = await fetch(
        "https://dragonball-api.com/api/characters/" + personajeAleatorio()
      );
      console.log(respuesta);
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        console.log(datos);
        setDatoPersonaje(datos);
        setLoading(false);
      } else
        alert("Error en la consulta de la API")
    } catch (error) {
      console.error(error);
    }
  };

  const personajeAleatorio = () => {
    return Math.floor(Math.random() * (40 - 1 + 1 + 1) + 1);
  };

  // nombreProps valor que envío debe ser el nombre del state, va entre {}

  // la lógica va entre llaves siempre
  // ternario: tal cosa?si pasa:si no pasa
  return (
    <main className="container my-5 text-center">
      <img src={logo} alt="Logo de Dragon Ball Z" className="w-50 mb-4" />
      {loading ? (
        <div className="d-flex justify-content-center my-3">
          <PacmanLoader
            color={"#fd6d25ff"}
            loading={loading}
            size={15}
            aria-label="Loading Spinner"
            data-testid="loader"
          ></PacmanLoader>
        </div>
      ) : (
        <Personaje dataPersonaje={dataPersonaje}></Personaje>
      )}

      <Button variant="danger" className="my-4" onClick={consultaAPI}>
        Obtener personaje
      </Button>
    </main>
  );
}

export default App;
