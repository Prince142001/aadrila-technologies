import React from "react";
import SectionHeading from "../ui/SectionHeading";
import CombinedShapeCopy from "../../assets/Combined-Shape-Copy.png";
import DocPilotBg from "../../assets/DocPilotBg.png";
import Group2 from "../../assets/Group-2.png";
import Group2Copy2 from "../../assets/Group-2-Copy-2.png";

function DocPilot() {
  return (
    <section className="">
      <div className="px-20 py-12 relative overflow-hidden">
        <div
          className="absolute left-full w-[45%] rotate-180 inset-0 bg-cover bg-center bg-no-repeat -z-10"
          style={{ backgroundImage: `url(${CombinedShapeCopy})` }}
        />

        <figure className="absolute top-5 right-50 w-[310.99981689453125px] h-[73.72344970703125px] z-110">
          <img
            src={Group2}
            alt="Icon"
            className="w-full h-full object-contain"
          />
        </figure>

        <div className="flex items-start justify-between flex-row-reverse gap-14">
          <div className="w-1/2">
            <div className="linear-gradient w-fit text-xl font-bold tracking-[4px] text-white px-6 py-3 rounded-full">
              DocPilot
            </div>
            <h3 className="mt-4 text-[32px] font-bold text-dark capitalize font-raleway pr-16">
              Streamline Document Workflows with Automation
            </h3>
            <div>
              <h4 className="mt-4 text-xl font-bold text-gray capitalize font-raleway">
                Features:
              </h4>
              <ul className="space-y-2 list-disc ml-4.5">
                <li className="text-base font-normal text-gray mt-1.5">
                  Automates document collection, routing, and task assignments.
                </li>
                <li className="text-base font-normal text-gray">
                  Real-time tracking with advanced dashboards.
                </li>
                <li className="text-base font-normal text-gray">
                  Seamless integration with enterprise systems via APIs.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mt-4 text-xl font-bold text-gray capitalize font-raleway">
                Benefits:
              </h4>
              <ul className="space-y-2 list-disc ml-4.5">
                <li className="text-base font-normal text-gray mt-1.5">
                  Reduce turnaround times by 50%.
                </li>
                <li className="text-base font-normal text-gray">
                  Improve operational efficiency with minimal manual effort.
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex gap-10 mt-8">
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
                src={DocPilotBg}
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

export default DocPilot;
