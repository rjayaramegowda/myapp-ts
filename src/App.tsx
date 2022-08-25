import React from "react";
import { Button, Col, Container, FormControl, Row } from "react-bootstrap";
import Datepicker from "./com/Datepicker";

function App() {
  return (
    <Container>
      <form action="submit-form.php">
        <Row>
          <Col md="12">
            <h1>React Bootstrap</h1>
          </Col>
          <Col md="12">
            <Datepicker min="2020-05-07" max="2022-05-07" name="dob1" />
            <br />
            <Datepicker min="2020-05-07" max="2022-05-07" name="dob2" />
          </Col>

          <Col className="mt-1" md="12">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </form>
    </Container>
  );
}

export default App;
