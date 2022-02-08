import React, { useEffect, useState } from "react";
import "./App.css";
import { Outlet, Link } from "react-router-dom";
import Home from './components/Home'
import axios from 'axios'
import NavBar from './components/NavBar';
import Question from "./components/Question";

function App() {
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoadingCategories(true);

    let cancel;

    axios({
      method: "GET",
      url: "https://opentdb.com/api_category.php",
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then(({ data }) => {
        setCategories(data.trivia_categories);
        setLoadingCategories(false);
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
        console.log(error);
        setLoadingCategories(false);
        setError("Error loading categories");
      });
    return () => cancel();
  }, []);

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Home categories={categories} />
      <Outlet />
    </div>
  );
}

export default App;
