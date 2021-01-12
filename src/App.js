import React, { useState } from 'react';
import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';
    
    
function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  return (
    <div className="App">
      <MessageForm inputs={state} setInputs={setState}/>
      <MessageDisplay data={state}/>
    </div>
  );
};


    
export default App;
