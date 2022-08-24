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
        <DropdownDOB
          value="2001-05-22"
          min="2000-07-22"
          max="2022-07-22"
          name="dateOfBirth"
        />
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
}

export default App;
