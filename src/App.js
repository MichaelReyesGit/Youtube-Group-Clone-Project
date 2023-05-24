import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

function App() {
  function CreateNavBar() {
    return (
      <div className="navBar">
        <ul>
          <li>Youtube</li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/home"
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
  return (
    <div className="App">
      <Router>
        <CreateNavBar />
        <Routes>
          <Route path="/home" />
          <Route path="/about" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
