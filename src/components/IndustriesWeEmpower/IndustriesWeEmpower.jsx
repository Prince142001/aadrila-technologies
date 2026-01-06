import React from "react";
import SectionHeading from "../ui/SectionHeading";
import Card from "./Card";
import HealthCareIcon from "../../assets/icons/Healthcare_Icon.png";
import InsuranceIcon from "../../assets/icons/Insurance_Icon.png";
import LendingIcon from "../../assets/icons/Lending_Icon.png";
import CombinedShapeCopy from "../../assets/Combined-Shape-Copy.png";
// import CombinedShapeCopy from "../../assets/Combined-Shape-Copy.png";
import Group2 from "../../assets/Group-2.png";
import Group2Copy2 from "../../assets/Group-2-Copy-2.png";

function IndustriesWeEmpower() {
  return (
    <section className="px-20 py-28 h-screen relative overflow-hidden">
      <div
        className="absolute left-0 w-[45%] inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${CombinedShapeCopy})` }}
      />
      {/* <div
        className="absolute right-[20%] w-full inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${Group2})` }}
      /> */}
      <figure className="absolute right-[21%] w-[164.57765197753906px] -z-10">
        <img src={Group2} alt="Icon" className="w-full h-full object-contain" />
      </figure>

      <figure className="absolute bottom-[15%] right-0 w-[310.99981689453125px] h-[73.72344970703125px] z-110">
        <img
          src={Group2Copy2}
          alt="Icon"
          className="w-full h-full object-contain"
        />
      </figure>

      <header className="">
        <SectionHeading
          classname="text-2xl font-bold"
          title="AI-driven innovation for growth."
        />
        <h3 className="mt-5 text-5xl font-semibold -tracking-[1px] capitalize font-raleway">
          Industries We Empower
        </h3>
      </header>

      <div className="w-full absolute z-10 top-0 left-0 h-screen">
        <ul>
          <li className="bg-white absolute right-20 top-24 shadow-[0px_0px_20px_0px_#0000001F] rounded-[20px] overflow-hidden">
            <Card
              img={HealthCareIcon}
              alt="Healthcare Icon"
              title="Healthcare"
              description="Streamline patient record management and ensure compliance with HIPAA standards."
            />
          </li>
          <li className="bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0px_0px_20px_0px_#0000001F] rounded-[20px] overflow-hidden">
            <Card
              img={LendingIcon}
              alt="Lending Icon"
              title="Lending"
              description="Ensure faster loan approvals with fraud detection and instant verification."
            />
          </li>
          <li className="bg-white absolute left-20 bottom-24 shadow-[0px_0px_20px_0px_#0000001F] rounded-[20px] overflow-hidden">
            <Card
              img={InsuranceIcon}
              alt="Insurance Icon"
              title="Insurance"
              description="Automate claims processing with accurate document validation."
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default IndustriesWeEmpower;
