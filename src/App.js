import React, { useEffect, useState } from "react";
import "./App.css";
import { Outlet, Link } from "react-router-dom";
import { Home, Quiz, Welcome, Lobby, Leaderboard } from "./pages";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  // const [loadingCategories, setLoadingCategories] = useState(false);
  // const [categories, setCategories] = useState([]);
  // const [error, setError] = useState(false);

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/quiz" element={<Quiz />} />
        {/* Remember to add element to path - score */}
        <Route path="/score" />
        <Route path="/lobby" element={<Lobby />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
