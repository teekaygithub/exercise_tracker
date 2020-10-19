import React from 'react';
import logo from './logo.svg';
// import './App.css';
import UserWindow from "./component/users";

function App() {
  return (
    <div className="container">
      <div id="user-window">
        <UserWindow />
      </div>
    </div>
  );
}

export default App;
