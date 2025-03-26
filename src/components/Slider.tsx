import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
type option = {
  src: string;
  alt: string;
};
interface SliderProps {
  slides: option[];
}
const Slider = ({ slides }: SliderProps) => {
  const [slide, setSlide] = useState(0);

  return (
    <div className="flex items-center justify-center p-10">
      <ChevronLeft
        onClick={() => setSlide(slide - 1)}
        className={`cursor-pointer absolute w-10 h-10 left-[450px] ${
          slide === 0 ? "pointer-events-none opacity-50" : "text-white"
        }`}
      />
      {slides.map((itm, idx) => {
        return (
          <img
            src={itm.src}
            alt={itm.alt}
            key={idx}
            className={`rounded w-[400px] h-[300px] ${
              slide === idx ? "" : "hidden"
            }`}
          />
        );
      })}

      <ChevronRight
        onClick={() => setSlide(slide + 1)}
        className={`cursor-pointer absolute w-10 h-10 right-[450px] ${
          slide === slides.length - 1
            ? "pointer-events-none opacity-50"
            : "text-white"
        }`}
      />
    </div>
  );
};

export default Slider;
