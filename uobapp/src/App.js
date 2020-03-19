import React, {useState} from 'react';
import './App.css';

import RegForm from "./Form";
import Users from "./Users";

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
       <Users user={user} />
    </div>
  );
}

export default App;
