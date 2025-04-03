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

  // useEffect(() => {
  //   const slideInterval = setInterval(() => nextSlide(), 5000);
  //   return () => clearInterval(slideInterval);
  // }, [slide]);

  return (
    <div className="relative overflow-hidden ">
      <div
        className={`flex  transition-transform duration-500`}
        style={{
          transform: `translateX(-${slide * 100}%)`,
        }}
      >
        {slides.map((itm, idx) => {
          return (
            <div key={idx} className="w-full flex-shrink-0">
              <img
                src={itm.src}
                alt={itm.alt}
                key={idx}
                style={{ width: "100%", height: "600px" }}
              />
            </div>
          );
        })}
      </div>

      <div className="absolute left-4 top-1/2">
        <CircleArrowLeft
          onClick={prevSlide}
          className={`cursor-pointer  w-10 h-10  text-white`}
        />
      </div>
      <div className="absolute right-4 top-1/2">
        <CircleArrowRight
          onClick={nextSlide}
          className={`cursor-pointer w-10 h-10 text-white`}
        />
      </div>
      <div className="absolute flex items-center bottom-4 left-1/2">
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
