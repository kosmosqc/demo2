import './App.css';
import Home from './pages';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
     <Routes>
       <Route exact path="/" element={<Home/>}  />
       <Route exact path="/we" element={<Home/>}  />
   
     </Routes>
    </Router>
  );
}

export default App;
