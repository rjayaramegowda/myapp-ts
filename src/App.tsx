import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import GooglePlace1 from "./GooglePlace1";
import GooglePlace1b from "./GooglePlace1b";
import GooglePlace1c from "./GooglePlace1c";
import GooglePlaceTypehead from "./GooglePlaceTypehead";

function App() {
  useEffect(() => {
    console.log("init()");
  }, []);
  return (
    <Container>
      <h1 className="my-5">react-google-autocomplete</h1>
      {/* <GooglePlace1 /> */}
      {/* <GooglePlace1b />
      <GooglePlace1c /> */}

      <GooglePlaceTypehead />
    </Container>
  );
}

export default App;
