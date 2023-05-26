import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";

function App() {
  
  

  function SingleVideoComponent() {

  }
  return (
    <div className="App">
      <Router>
        <NavBar />
        <SearchBar />
        <SingleVideoComponent />
        <Routes>
          <Route path="/home" />
          <Route path="/about" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
