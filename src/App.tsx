// import ImageSlider from "./components/ImageSlider";

import Slider from "./components/Sliders/Slider";
import RangeSlide from "./components/Sliders/RangeSlider";
// import { slides } from "./components/data/slidedata.json";
const App = () => {
  return (
    <div className="py-10 container mx-auto border my-10">
      {/* <Slider slides={slides} /> */}
      <Slider />
      <RangeSlide />
    </div>
  );
};

export default App;
