import React from "react";
import SectionHeading from "../ui/SectionHeading";
import CombinedShapeCopy from "../../assets/Combined-Shape-Copy.png";
import FeaturesAndBenefitsBg from "../../assets/features-and-benefits.png";
import Group2 from "../../assets/Group-2.png";
import Group2Copy2 from "../../assets/Group-2-Copy-2.png";
import EmblaCarousel from "./EmblaCarousel";
import CarouselCard from "./CarouselCard";

function Blogs() {
  const blogSlides = [
    {
      id: 1,
      title: "How AI is Revolutionizing Document Management for Enterprises",
      desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
      date: "24 July, 2025",
    },
    {
      id: 2,
      title: "Top 5 Fraud Prevention Strategies for Financial Institutions",
      desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
      date: "24 July, 2025",
    },
    {
      id: 3,
      title:
        "The Future of OCR: From Basic Extraction to AI-Driven Intelligence",
      desc: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
      date: "24 July, 2025",
    },
    {
      id: 4,
      title: "AI-Powered Risk Assessment in Modern FinTech",
      desc: "Explore how artificial intelligence is transforming risk assessment models by improving accuracy, reducing manual effort, and enabling real-time decision-making in financial services.",
      date: "24 July, 2025",
    },
  ];

  const slides = blogSlides.map((blog) => (
    <CarouselCard
      key={blog.id}
      title={blog.title}
      date={blog.date}
      desc={blog.desc}
    />
  ));

  return (
    <section className="">
      <div className="px-20 py-10 h-screen relative overflow-hidden">
        <figure className="absolute top-0 left-0 w-[310.99981689453125px] h-[73.72344970703125px] z-110">
          <img
            src={Group2Copy2}
            alt="Icon"
            className="w-full h-full object-contain"
          />
        </figure>

        <header className="w-[64%] mx-auto">
          <SectionHeading
            classname="text-5xl font-bold leading-15.25 font-raleway text-dark -tracking-[1px] text-center"
            title="Blogs"
            subtitleClassname="text-[24px] font-normal btn-linear-gradient"
            subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
          />
        </header>

        <div className="mt-28">
          <EmblaCarousel
            slides={slides}
            options={{
              loop: false,
              align: "start",
              slidesToScroll: 1,
            }}
          />
        </div>
      </div>
      <div className="pb-20"></div>
    </section>
  );
}

export default Blogs;
