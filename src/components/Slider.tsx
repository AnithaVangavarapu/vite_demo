import {
  CircleArrowLeft,
  CircleArrowRight,
  CircleDot,
  Dot,
} from "lucide-react";
import { useState, useEffect } from "react";
type option = {
  src: string;
  alt: string;
};
interface SliderProps {
  slides: option[];
}
const Slider = ({ slides }: SliderProps) => {
  const [slide, setSlide] = useState(0);

  const prevSlide = () => {
    slide === 0 ? setSlide(slides.length - 1) : setSlide(slide - 1);
  };
  const nextSlide = () => {
    slide === slides.length - 1 ? setSlide(0) : setSlide(slide + 1);
  };
  useEffect(() => {
    const slideInterval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(slideInterval);
  }, [slide]);

  return (
    <div className="flex items-center justify-center relative">
      <div className="absolute">
        {slides.map((itm, idx) => {
          return (
            <img
              src={itm.src}
              alt={itm.alt}
              key={idx}
              className={`w-full h-[400px] ${slide === idx ? "" : "hidden"} `}
            />
          );
        })}
      </div>
      <div className="absolute flex justify-between">
        <CircleArrowLeft
          onClick={prevSlide}
          className={`cursor-pointer w-10 h-10 left-4 text-white`}
        />
        <CircleArrowRight
          onClick={nextSlide}
          className={`cursor-pointer w-10 h-10  right-4 text-white`}
        />
      </div>
      <div className="absolute flex items-center top-[400px]">
        {slides.map((_, idx) => {
          return (
            <div>
              {slide === idx ? (
                <CircleDot
                  key={idx}
                  onClick={() => setSlide(idx)}
                  className={`cursor-pointer p-0.3 text-white w-6 h-6 `}
                />
              ) : (
                <Dot
                  key={idx}
                  onClick={() => setSlide(idx)}
                  className={`cursor-pointer  w-8 h-8 `}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
