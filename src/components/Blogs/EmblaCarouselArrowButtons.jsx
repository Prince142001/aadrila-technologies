import React, { useCallback, useEffect, useState } from "react";
import { MaterialSymbolsArrowBackRounded } from "../icons/MaterialSymbolsArrowBackRounded";

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = ({ disabled, ...props }) => {
  return (
    <button
      type="button"
      disabled={disabled}
      {...props}
      className={`
        w-10 h-10 flex items-center justify-center rounded-lg bg-btn-primary
        transition-all duration-300
        ${disabled ? "opacity-40 bg-btn-primary" : "hover:bg-[#719AD0]"}
      `}
    >
      <MaterialSymbolsArrowBackRounded />
    </button>
  );
};

export const NextButton = ({ disabled, ...props }) => {
  return (
    <button
      type="button"
      disabled={disabled}
      {...props}
      className={`
       w-10 h-10 flex items-center justify-center rounded-lg bg-btn-primary
        transition-all duration-300
        ${disabled ? "opacity-40 bg-btn-primary" : "hover:bg-[#719AD0]"}
      `}
    >
      <span className="rotate-180">
        <MaterialSymbolsArrowBackRounded />
      </span>
    </button>
  );
};
