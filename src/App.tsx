import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import DropdownDOB from "./DropdownDOB";

function App() {
  useEffect(() => {
    console.log("init()");
  }, []);

  return (
    <Container>
      <h1>React Bootstrap</h1>
      <form action="submit-form.php">
      <DropdownDOB start={1901} max={97} name="dateOfBirth" />
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
}

export default App;
