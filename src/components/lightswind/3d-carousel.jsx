"use client";

import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { useIsMobile } from "./hooks/use-mobile";

const ThreeDCarousel = ({
  items = [],
  autoRotate = true,
  rotateInterval = 4000,
  cardHeight = 500,
  isMobileSwipe = true,
}) => {
  const [active, setActive] = useState(0);
  const carouselRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const isMobile = useIsMobile();
  const minSwipeDistance = 50;

  useEffect(() => {
    if (autoRotate && isInView && !isHovering) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % items.length);
      }, rotateInterval);
      return () => clearInterval(interval);
    }
  }, [isInView, isHovering, autoRotate, rotateInterval, items.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    return () => observer.disconnect();
  }, []);

  const onTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      setActive((prev) => (prev + 1) % items.length);
    } else if (distance < -minSwipeDistance) {
      setActive((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  const getCardAnimationClass = (index) => {
    if (index === active) return "scale-100 opacity-100 z-20";
    if (index === (active + 1) % items.length)
      return "translate-x-[40%] scale-60 right-[200px]  blur-xs z-10";
    if (index === (active - 1 + items.length) % items.length)
      return "translate-x-[-40%] scale-60 left-[200px]  blur-xs z-10";
    return "scale-90 opacity-0";
  };

  return (
    <section
      id="ThreeDCarousel"
      className="bg-transparent min-w-full mx-aut flex items-center justify-center"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 min-w-[350px] md:min-w-[1000px] max-w-7xl">
        <div
          className="relative overflow-hidden h-[550px]"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          ref={carouselRef}
        >
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`absolute top-0 w-full max-w-[318px] transform transition-all duration-500 ${getCardAnimationClass(
                  index
                )}`}
              >
                <Card
                  className={`overflow-hidden bg-background h-[${cardHeight}px] flex flex-col`}
                >
                  <div
                    className="relative bg-transparent p-0 flex items-center justify-center h-[418px] overflow-hidden"
                    style={{
                      backgroundImage: `url(${item.imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-transparent" />
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {!isMobile && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-transparent rounded-full flex items-center justify-center text-gray-500 hover:bg-white z-30"
                onClick={() =>
                  setActive((prev) => (prev - 1 + items.length) % items.length)
                }
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-500 hover:bg-white z-30 shadow-md transition-all hover:scale-110"
                onClick={() => setActive((prev) => (prev + 1) % items.length)}
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ThreeDCarousel;
