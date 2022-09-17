import * as React from "react";
import { Button } from "react-bootstrap";

interface IAppProps {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  variant?: string;
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <Button variant={props.variant} onClick={props.onClick}>
      Click Me
    </Button>
  );
};

export default App;
