// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import OurServices from "./pages/OurServices/OurServices";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import MainDashboard from "./pages/DashboardPage/MainDashboard";
import AIProfessionals from "./pages/AIProfessionals/AIProfessionals";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/MainDashBoard" element={<MainDashboard />} />
        <Route path="/AIProfessionals" element={<AIProfessionals />} />
      </Routes>
    </Router>    
  );
};

export default App;
