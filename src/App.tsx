import React from 'react';
import { add } from './helper';

interface myvo {
  a:number,
  b:number
}

function App(props:myvo) {
  return (
    <div className="container">
     <button data-testid="custom-element" className='btn btn-primary'>
       Learn React
     </button>
     <p>{add(props.a, props.b)}</p>
    </div>
  );
}



export default App;
