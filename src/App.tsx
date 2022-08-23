import React, { useEffect } from "react";
import { Button, Col, Container, FormControl, Row } from "react-bootstrap";
import DropdownDOB from "./DropdownDOB";

function App() {
  useEffect(() => {
    console.log("init()");
  }, []);
  return (
    <Container>
      <h1>React Bootstrap</h1>
      <form action="submit-form.php">
        <DropdownDOB />
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
}

export default App;
