
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";

function App() {
  function CreateNavBar() {
    return (
      <div className="navBar">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">
              YouTube
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <NavLink
                    className="nav-link active text-white"
                    aria-current="page"
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/about">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  function SearchBar() {
    const [results, setResults] = useState([]);
    const [search, setSearch] = useState("");

    let API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=AIzaSyCdlC9flaUqKX9b2g9lbIzb4Us0PcEU7nQ&maxResults=25`;

    async function handleFetch() {
      try {
        let result = await axios.get(API);

        setResults(result.data.items);
      } catch (e) {
        console.log(e);
      }
    }

    return (
      <div className="search-container">
        <div className="input-group">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleFetch();
            }}
          >
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              className="form-control rounded"
              placeholder="Search..."
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <button type="button" className="btn btn-outline-primary">
              search
            </button>
          </form>
        </div>
        <div className="alert alert-light" role="alert">
          No Search Results Yet!, Please submit a search above!
        </div>

        {results.map(({ etag, snippet }) => {
          return (
            <div key={etag} className="card" style={{ width: "18rem" }}>
              <img
                src={snippet.thumbnails.high.url}
                className="card-img-top"
                alt={snippet.channelTitle}
              />
              <div className="card-body">
                <h2 className="card-text">{snippet.title}</h2>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div className="App">
      <Router>
        <CreateNavBar />
        <SearchBar />
        <Routes>
          <Route path="/home" />
          <Route path="/about" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;