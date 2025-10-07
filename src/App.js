import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

function App() {
  return (
    // Add basename="/portfolio" here
    <Router basename="/portfolio">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;

