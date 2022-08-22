import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import DateFieldDD from "./com/DateFieldDD";
import Example from "./Example";

function App() {
  useEffect(() => {
    console.log("init()");
  }, []);
  return (
    <Container>
      <h1>React Bootstrap</h1>
      <DateFieldDD />
    </Container>
  );
}

export default App;
