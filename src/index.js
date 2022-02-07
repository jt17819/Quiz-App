import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<App />} />
        <Route path='/quiz' element={<App />} />
        <Route path='/leaderboard' element={<App />} />
      </Routes>
    </BrowserRouter>    
  </React.StrictMode>,
  document.getElementById('root')
);

