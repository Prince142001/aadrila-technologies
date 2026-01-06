import React from "react";
import HeroBg from "../../assets/abstract-blue-background-with-dynamic-shape.png";
import ThreeDCarousel from "../lightswind/3d-carousel";
import LicenseImg from "../../assets/License.png";
import InvoicieImg from "../../assets/Invocie.png";
import DocImg from "../../assets/Doc.png";
import SectionHeading from "../ui/SectionHeading";

function HeroSection() {
  const items = [
    {
      id: 1,
      imageUrl: LicenseImg,
    },
    {
      id: 2,
      imageUrl: InvoicieImg,
    },
    {
      id: 3,
      imageUrl: DocImg,
    },
  ];

  return (
    <section className="relative w-full flex items-center justify-center min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${HeroBg})` }}
      />
      <div className="px-20 flex items-center justify-center">
        <div className="w-2/5">
          <SectionHeading
            classname="text-5xl font-bold font-raleway leading-[68.25px]"
            title="AI-Powered"
          />
          <h2 className="text-5xl font-bold font-raleway leading-[68.25px]">
            Document Automation & Fraud Detection
          </h2>
          <p className="mt-5 pr-4">
            Enhance security, accuracy, and efficiency with our cutting-edge AI
            solutions for seamless document processing and fraud prevention.
          </p>
          <div>
            <ul className="flex gap-10 mt-5">
              <li className="w-full overflow-hidden">
                <a
                  href="#"
                  className="block w-full h-full py-3 font-raleway text-center text-base leading-5 font-semibold text-white bg-btn-primary rounded-full"
                >
                  Get a Demo
                </a>
              </li>
              <li className="w-full overflow-hidden">
                <a
                  href="#"
                  className="block w-full h-full py-3 font-raleway text-center text-base leading-5 font-semibold text-white bg-btn-primary rounded-full"
                >
                  Explore Solutions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-3/5">
          <ThreeDCarousel
            items={items}
            autoRotate={true}
            rotateInterval={4000}
            cardHeight={500}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
