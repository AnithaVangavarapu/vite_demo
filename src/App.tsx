import { useState } from "react";
import EmojiSlider from "./components/Sliders/EmojiSlider";

const App = () => {
  const [feedBack, setFeedBack] = useState("😡");
  return (
    <div className=" ">
      <div className="mx-[50%]">{feedBack}</div>
      <EmojiSlider
        onChange={setFeedBack}
        min={1}
        max={5}
        emojis={["😡", "😕", "😐", "😊", "😍"]}
        colors={["#e63946", "#f4a261", "#f1fa8c", "#a8dadc", "#2a9d8f"]}
      />
    </div>
  );
};

export default App;

// import ImageSlider from "./components/ImageSlider";
// import Slider from "./components/Sliders/Slider";
// import { slides } from "./components/data/slidedata.json";
// import RangeSlide from "./components/Sliders/RangeSlider";
// import { useState } from "react";

// const App = () => {
//   const [values, setValues] = useState<number[]>([1, 5]);
//   const marks = [
//     { label: "a" },
//     {
//       label: "b",
//     },
//     {
//       label: "c",
//     },
//     {
//       label: "d",
//     },
//     {
//       label: "e",
//     },
//   ];

//   return (
//     <div className=" ">
//       <Slider slides={slides} />
//       <Slider />
//       <RangeSlide
//         values={values}
//         rangeValues={{ min: 1, max: 5 }}
//         markList={marks}
//         onChange={(val) => setValues(val)}
//         step={0.2}
//       />

//     </div>
//   );
// };

// export default App;
