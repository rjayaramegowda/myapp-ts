import * as React from "react";
import MyButton from "./com/MyButton";

export interface IAppProps {}

function App(props: IAppProps) {
  function handleClic(e: React.BaseSyntheticEvent) {
    console.log("Clikced!", e.target);
  }
  return (
    <div className="container">
      <h1>Welcome</h1>
      <MyButton onClick={handleClic} variant="success" />
    </div>
  );
}

export default App;
