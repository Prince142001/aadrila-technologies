import { useState } from "react";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import IndustriesWeEmpower from "./components/IndustriesWeEmpower/IndustriesWeEmpower";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <IndustriesWeEmpower />
    </>
  );
}

export default App;
