import "./App.css";
import Home from "./pages";
import Skillpage from "./components/Skill/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  document.title = "Alain Gionet";
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Skill" element={<Skillpage />} />
      </Routes>
    </Router>
  );
}

export default App;
