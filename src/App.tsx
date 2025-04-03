// import Slider from "./components/Slider";

import RangeSlider from "./components/RangeSlider/RangeSlider";

// import { slides } from "./components/data/slidedata.json";
const App = () => {
  return (
    <div className="py-10 container mx-auto border my-10">
      {/* <Slider slides={slides} /> */}
      <RangeSlider />
    </div>
  );
};

export default App;
