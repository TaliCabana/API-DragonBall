import { Card, Button, CardHeader } from "react-bootstrap";

const Personaje = () => {
  return (
    <Card>
      <Card.Header className="fw-bold fs-3">Goku</Card.Header>
      <Card.Img
        variant="top"
        src="https://dragonball-api.com/characters/goku_normal.webp" className="img-card"
      />
      <Card.Body>
        <Card.Title>Caracterísiticas</Card.Title>
        <ul className="list-group">
          <li className="list-group-item">Raza: Saiyan</li>
          <li className="list-group-item">ki: 60.000.000</li>
          <li className="list-group-item">Grupo: "Z Finghter"</li>
        </ul>
      </Card.Body>
    </Card>
  );
};

export default Personaje;
