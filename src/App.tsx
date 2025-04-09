// import ImageSlider from "./components/ImageSlider";
// import Slider from "./components/Sliders/Slider";
// import { slides } from "./components/data/slidedata.json";
// import RangeSlide from "./components/Sliders/RangeSlider";
// import { useState } from "react";

import EmojiSlider from "./components/Sliders/EmojiSlider";

const App = () => {
  // const [values, setValues] = useState<number[]>([1, 5]);
  // const marks = [
  //   { label: "a" },
  //   {
  //     label: "b",
  //   },
  //   {
  //     label: "c",
  //   },
  //   {
  //     label: "d",
  //   },
  //   {
  //     label: "e",
  //   },
  // ];
  return (
    <div className="  ">
      {/* <Slider slides={slides} /> */}
      {/* <Slider /> */}
      {/* <RangeSlide
        values={values}
        rangeValues={{ min: 1, max: 5 }}
        markList={marks}
        onChange={(val) => setValues(val)}
        step={0.2}
      /> */}
      <EmojiSlider />
    </div>
  );
};

export default App;
