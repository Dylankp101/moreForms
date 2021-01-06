import React, { useState } from "react";
import FormComp from "./components/FormComp"
import './App.css';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email:"",
    password:"",
    cPassword: ""
  });
  return (
    <div className="App">
      <FormComp inputs={state} setInputs={setState}/>

    </div>
  );
}

export default App;
