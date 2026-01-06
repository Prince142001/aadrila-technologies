import { useState } from "react";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import IndustriesWeEmpower from "./components/IndustriesWeEmpower/IndustriesWeEmpower";
import FeaturesAndBenefits from "./components/FeaturesAndBenefits/FeaturesAndBenefits";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <IndustriesWeEmpower />
      <FeaturesAndBenefits />
    </>
  );
}

export default App;
