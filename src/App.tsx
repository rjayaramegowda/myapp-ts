import React from "react";
import { Button, Col, Container, FormControl, Row } from "react-bootstrap";
import Datepicker from "./com/Datepicker";
import DropdownDOB from "./DropdownDOB";

function App() {
  return (
    <Container>
      <form action="submit-form.php">
        <Row>
          <Col md="12">
            <h1>React Bootstrap</h1>
            <DropdownDOB
              value="2021-05-07"
              min="2020-05-07"
              max="2022-05-07"
              name="dateOfBirth"
            />
          </Col>
          <Col md="12">
            <Datepicker
              value="2021-05-07"
              min="2020-05-07"
              max="2022-05-07"
              name=""
            />
          </Col>

          <Col className="mt-5" md="12">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </form>
    </Container>
  );
}

export default App;
