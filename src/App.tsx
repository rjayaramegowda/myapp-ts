import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log("init()");
  }, []);
  return (
    <div className="container">
     <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
