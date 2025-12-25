import React from "react";
import HeroBg from "../../assets/abstract-blue-background-with-dynamic-shape.png";
import ThreeDCarousel from "../lightswind/3d-carousel";
import LicenseImg from "../../assets/License.png";
import InvoicieImg from "../../assets/Invocie.png";
import DocImg from "../../assets/Doc.png";

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
    <section className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${HeroBg})` }}
      />
      <div className="px-20 flex items-center justify-center">
        <div className="w-2/5">
          <h2 className="text-5xl font-bold leading-[68.25px] btn-linear-gradient">
            AI-Powered
          </h2>
          <h2 className="text-5xl font-bold leading-[68.25px]">
            Document Automation & Fraud Detection
          </h2>
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
