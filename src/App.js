import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserWindow from "./component/users";
import ExerciseWindow from "./component/exercises";

function App() {
  return (
    <div className="container">
      <h1>Exercise Logger App</h1>
      <div id="user-window-container">
        <UserWindow />
      </div>
      <br />
      <div id="exercise-window-container">
        <ExerciseWindow />
      </div>
    </div>
  );
}

export default App;
