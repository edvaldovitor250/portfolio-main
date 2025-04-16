import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import usePreloader from "./hooks/ui/usePreloader";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Experience from "./pages/Experience";
const App = () => {
  const load = usePreloader();

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;