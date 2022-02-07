import React from 'react';
import './App.css';
import { Outlet, Link } from "react-router-dom";
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/quiz'>Quiz</Link>
          <Link to='/leaderboard'>Leaderboard</Link>
        </nav>
      </header>
      <Home />
    <Outlet/>
    </div>
  );
}

export default App;
