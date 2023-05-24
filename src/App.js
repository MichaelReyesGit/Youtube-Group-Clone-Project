import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

function App() {
  function CreateNavBar() {
    return (
      <div className="navBar">
        <ul>
          <li>
            <a href="#">Youtube</a>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
  function SearchBar() {
    return (
      <div className="search-container">
        <div className="input-group">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search..."
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button type="button" className="btn btn-outline-primary">
            search
          </button>
        </div>
        <div className="alert alert-light" role="alert">
          No Search Results Yet!, Please submit a search above!
        </div>
      </div>
    );
  }
  return (
    <div className="App">
      <Router>
        <CreateNavBar />
        <SearchBar />
        <Routes>
          <Route path="/" />
          <Route path="/about" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
