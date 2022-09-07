import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import GooglePlace1 from "./GooglePlace1";
import GooglePlace1b from "./GooglePlace1b";
import GooglePlace1c from "./GooglePlace1c";

function App() {
  useEffect(() => {
    console.log("init()");
  }, []);
  return (
    <Container>
      <h1 className="my-5">react-google-autocomplete</h1>
      {process.env.REACT_APP_API_URL}
      <GooglePlace1 />
      <GooglePlace1b />
      <GooglePlace1c />
    </Container>
  );
}

export default App;
