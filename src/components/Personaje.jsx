import { Card, Button, CardHeader } from "react-bootstrap";

const Personaje = ({dataPersonaje}) => {
  return (
    <Card>
      <Card.Header className="fw-bold fs-3">{dataPersonaje.name}</Card.Header>
      <Card.Img
        variant="top"
        src={dataPersonaje.image} className="img-card"
      />
      <Card.Body>
        <Card.Title>Caracterísiticas</Card.Title>
        <ul className="list-group">
          <li className="list-group-item">Raza: {dataPersonaje.race}</li>
          <li className="list-group-item">ki: {dataPersonaje.ki}</li>
          <li className="list-group-item">Grupo: {dataPersonaje.affiliation}</li>
        </ul>
      </Card.Body>
    </Card>
  );
};

export default Personaje;
