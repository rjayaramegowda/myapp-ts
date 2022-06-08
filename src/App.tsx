import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function App() {
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const rememberMeDefault = cookies.get("rememberMe")==='true'
      ? true
      : false;
    console.log("rememberMeDefault = ", rememberMeDefault);
    setRememberMe(rememberMeDefault);
  }, []);

  function handleChange() {
    setRememberMe(!rememberMe);
    cookies.set('rememberMe', !rememberMe, { path: '/' });
  }

  return (
    <div className="container">
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          checked={rememberMe}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
        Remember me
        </label>
      </div>
    </div>
  );
}

export default App;
