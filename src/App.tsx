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
          value="2021-05-07"
          min="2020-05-07"
          max="2022-05-07"
          name="dateOfBirth"
        />
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
}

export default App;
