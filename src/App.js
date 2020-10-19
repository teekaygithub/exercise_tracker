import React from 'react';
import logo from './logo.svg';
// import './App.css';
import UserWindow from "./component/users";
import ExerciseWindow from "./component/exercises";

function App() {
  return (
    <div className="container">
      <div id="user-window">
        <UserWindow />
      </div>
      <br />
      <div id="exercise-window">
        <ExerciseWindow />
      </div>
    </div>
  );
}

export default App;
