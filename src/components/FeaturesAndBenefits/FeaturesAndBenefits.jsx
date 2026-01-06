import React from "react";
import SectionHeading from "../ui/SectionHeading";
import CombinedShapeCopy from "../../assets/Combined-Shape-Copy.png";
import FeaturesAndBenefitsBg from "../../assets/features-and-benefits.png";
import Group2 from "../../assets/Group-2.png";
import Group2Copy2 from "../../assets/Group-2-Copy-2.png";

function FeaturesAndBenefits() {
  return (
    <section className="">
      <div className="px-20 py-12 h-screen relative overflow-hidden">
        <div
          className="absolute left-full w-[45%] rotate-180 inset-0 bg-cover bg-center bg-no-repeat -z-10"
          style={{ backgroundImage: `url(${CombinedShapeCopy})` }}
        />

        <figure className="absolute top-0 left-0 w-[310.99981689453125px] h-[73.72344970703125px] z-110">
          <img
            src={Group2Copy2}
            alt="Icon"
            className="w-full h-full object-contain"
          />
        </figure>

        <header className="w-1/2 mx-auto">
          <SectionHeading
            classname="text-2xl font-bold text-center"
            title="Features and Benefits."
          />
          <h3 className="mt-5 text-5xl font-semibold text-dark -tracking-[1px] text-center capitalize font-raleway">
            Our Products
          </h3>
        </header>

        <div className="mt-28 flex items-start justify-between gap-14">
          <div className="w-1/2">
            <div className="linear-gradient w-fit text-xl font-bold text-white px-6 py-3 rounded-full">
              DocSim
            </div>
            <h3 className="mt-4 text-[32px] font-bold text-dark capitalize font-raleway pr-16">
              AI-Powered Document Similarity Engine
            </h3>
            <div>
              <h4 className="mt-4 text-xl font-bold text-gray capitalize font-raleway">
                Features:
              </h4>
              <ul className="space-y-2 list-disc ml-4.5">
                <li className="text-base font-normal text-gray mt-1.5">
                  Detects near-duplicates and tampered documents.
                </li>
                <li className="text-base font-normal text-gray">
                  Identifies fraudulent patterns across large repositories.
                </li>
                <li className="text-base font-normal text-gray">
                  Multi-language support for global adaptability.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mt-4 text-xl font-bold text-gray capitalize font-raleway">
                Benefits:
              </h4>
              <ul className="space-y-2 list-disc ml-4.5">
                <li className="text-base font-normal text-gray mt-1.5">
                  Save 30% time on manual checks.
                </li>
                <li className="text-base font-normal text-gray">
                  Reduce document fraud by up to 40%.
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex gap-10 mt-5">
                <li className="w-fit overflow-hidden">
                  <a
                    href="#"
                    className="block w-full h-full px-8 py-3 font-raleway text-center text-base leading-5 font-semibold text-white bg-btn-primary rounded-full"
                  >
                    Learn More
                  </a>
                </li>
                <li className="w-fit overflow-hidden">
                  <a
                    href="#"
                    className="block w-full h-full px-8 py-3 font-raleway text-center text-base leading-5 font-semibold text-white bg-btn-primary rounded-full"
                  >
                    Schedule a Demo
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/2">
            <figure className="w-150.25 h-126 rounded-[40px] overflow-hidden">
              <img
                src={FeaturesAndBenefitsBg}
                alt="Features and Benefits"
                className="w-full h-full object-cover"
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="pb-20"></div>
    </section>
  );
}

export default FeaturesAndBenefits;
