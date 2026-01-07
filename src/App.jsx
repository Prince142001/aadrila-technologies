import { useState } from "react";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import IndustriesWeEmpower from "./components/IndustriesWeEmpower/IndustriesWeEmpower";
import FeaturesAndBenefits from "./components/FeaturesAndBenefits/FeaturesAndBenefits";
import DocPilot from "./components/DocPilot/DocPilot";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <IndustriesWeEmpower />
      <FeaturesAndBenefits />
      <DocPilot />
      <Blogs />
    </>
  );
}

export default App;
