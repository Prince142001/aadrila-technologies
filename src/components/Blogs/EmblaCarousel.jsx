import React from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      {/* Viewport */}
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        {/* Container */}
        <div className="embla__container flex gap-6">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide flex-[0_0_32.155%]">
              {/* <div key={index} className="embla__slide flex-[0_0_33.333%]"> */}
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-10 flex items-center justify-center gap-4">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </section>
  );
};

export default EmblaCarousel;
