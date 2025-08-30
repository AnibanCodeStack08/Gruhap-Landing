import React, { useState, useEffect } from "react";
import "./App.css";
import { Mail, Facebook, Twitter, Instagram } from "lucide-react";
import Hero from "./Components/Hero";
import Service from "./Components/Service";
import Team from "./Components/Team";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {


  return (
    <>
      <Hero />
      <Service/>
      {/* <Team/> */}
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
