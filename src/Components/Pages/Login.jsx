import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Jumbotron,
  Image
} from "react-bootstrap";
import prometeo from "../../Images/prometeo.jpg";

export default function Login() {
  return (
    <Container>
      <Row>
        <Col>
          <Image src={prometeo} fluid />
        </Col>
        <Col>
          <Jumbotron fluid>
            <Container>
              <h1>INICIAR SESIÓN</h1>
              <p>
                Es necesario el inicio de sesión para acceder a las
                convocatorias y demás opciones.
              </p>
              <br></br>
              <Button href="/register" variant="outline-danger" block>
              No tienes cuenta? REGISTRATE AQUI
            </Button>
            </Container>
          </Jumbotron>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" placeholder="ejemplo@udem.co" />
              <Form.Text className="text-muted">
                Correo con el que realizó el registro.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
            <Button variant="danger" type="submit" block>
              INGRESAR
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
