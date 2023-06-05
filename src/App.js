import { Leftside } from "./Components/Leftside";
import Navbar from "./Components/Navbar";
import { Mid } from "./Components/Mid";
import { Right } from "./Components/Right";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <Container>
      <Navbar />
      <Row>
        <Col xs="3">
          <Leftside />
        </Col>
        <Col>
          <Mid />
        </Col>
        <Col xs="3">
          <Right />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
