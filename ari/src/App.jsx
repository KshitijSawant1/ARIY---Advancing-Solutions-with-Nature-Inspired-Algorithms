import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Visualizer from "./components/Visualizer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/visualizer" element={<Visualizer />} />
      </Routes>
    </Router>
  );
}

export default App;
