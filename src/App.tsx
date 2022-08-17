import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

function App() {
  useEffect(() => {
    console.log("init()");
  }, []);
  return (
    <Container>
      <h1>React Bootstrap</h1>
    </Container>
  );
}

export default App;
