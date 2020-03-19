import React, {useState} from 'react';
import './App.css';

import RegForm from "./Form";

function App() {

  const [user, setUser] = useState([
    {
         username: 'weinerjm',
         password: 'xyz123',
         email: 'me@me.com',
         tos: 'yes',
    }
  ])

  const addUserHandler = newUser => {
    setUser([...user, newUser]);
  }

  return (
    <div className="App">
      <h2>User Registration</h2>
       <RegForm addUser={addUserHandler}/>
    </div>
  );
}

export default App;
