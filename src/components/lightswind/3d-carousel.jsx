"use client";

import React, { useRef, useEffect, useState } from "react";
import { Card } from "../ui/card";
import { useIsMobile } from "./hooks/use-mobile";
import Scanner from "../../assets/scanner.png";

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
  const [scannerKey, setScannerKey] = useState(0);
  const isMobile = useIsMobile();
  const minSwipeDistance = 50;

  // Trigger scanner animation when active slide changes
  useEffect(() => {
    setScannerKey((prev) => prev + 1);
  }, [active]);

  // Auto-rotate functionality
  useEffect(() => {
    if (autoRotate && isInView && !isHovering) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % items.length);
      }, rotateInterval);
      return () => clearInterval(interval);
    }
  }, [isInView, isHovering, autoRotate, rotateInterval, items.length]);

  // IntersectionObserver to detect when carousel is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

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
      return "translate-x-[40%] scale-50 right-[100px] shadow-[0px_4px_40px_0px_rgba(0,0,0,0.25) blur-xs z-10";
    if (index === (active - 1 + items.length) % items.length)
      return "translate-x-[-40%] scale-50 left-[100px] shadow-[0px_4px_40px_0px_rgba(0,0,0,0.25) blur-xs z-10";
    return "scale-90 opacity-0";
  };

  return (
    <>
      <style>{`
        @keyframes scanDocument {
          0% {
            top: -120px;
          }
          45% {
            top: 100%;
          }
          50% {
            top: 100%;
          }
          95% {
            top: -120px;
          }
          100% {
            top: -120px;
          }
        }
        
        .scanner-animation {
          animation: scanDocument 3.5s ease-in-out forwards;
        }
      `}</style>

      <section
        id="ThreeDCarousel"
        className="bg-transparent min-w-full mx-auto flex items-center justify-center"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-end">
          <div
            className="relative overflow-visible w-full h-101.75"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onTouchStart={isMobileSwipe ? onTouchStart : undefined}
            onTouchMove={isMobileSwipe ? onTouchMove : undefined}
            onTouchEnd={isMobileSwipe ? onTouchEnd : undefined}
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
                    className="overflow-hidden bg-background flex flex-col"
                    style={{ height: `${cardHeight}px` }}
                  >
                    <div
                      className="relative bg-transparent p-0 flex items-center justify-center overflow-hidden"
                      style={{
                        backgroundImage: `url(${item.imageUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "418px",
                      }}
                    >
                      <div className="absolute inset-0 bg-transparent" />

                      {/* Scanner Effect - Only shows on active card */}
                      {index === active && (
                        <div
                          key={scannerKey}
                          className="scanner-animation absolute left-0 w-full pointer-events-none z-30"
                          style={{
                            top: "-120px",
                            height: "120px",
                          }}
                        >
                          <img
                            src={Scanner}
                            alt=""
                            className="w-full h-full object-cover"
                            style={{
                              filter:
                                "drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))",
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThreeDCarousel;
