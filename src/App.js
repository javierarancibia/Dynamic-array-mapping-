import * as React from 'react';
import './style.css';

export default function App() {
  const array = [{id: 1, name: "john", age: 33}, {id: 2, name: "mike", age: 43} ]
  const idProp = "id"

  return (
    <select> 
        <option value="">Choose...</option>
        { array.map(opt => (
            <option key={opt[idProp]} value={opt.idProp}>{opt[idProp]}</option>
        ))} 
    </select> 
  );
}
