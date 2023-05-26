import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
  function SingleVideoComponent() {
    return (
      <div>
        <h1>Ariana Grande</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/videos" element={<SingleVideoComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
