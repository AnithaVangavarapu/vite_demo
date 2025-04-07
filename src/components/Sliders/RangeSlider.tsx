import { useState } from "react";
// import styles from "./rangeSlider.module.css";
import Range from "rc-slider";
import "rc-slider/assets/index.css";

function RangeSlide() {
  const [values, setValues] = useState<number | number[]>([1, 5]);

  console.log("values", values);
  const marks = {
    1: {
      style: {
        width: "10px",
      },
      label: "1",
    },
    2: {
      style: {
        width: "10px",
      },
      label: "2",
    },
    3: {
      style: {
        width: "10px",
      },
      label: "3",
    },
    4: {
      style: {
        width: "10px",
      },
      label: "4",
    },
    5: {
      style: {
        width: "10px",
      },
      label: "5",
    },
  };
  return (
    <div className="w-[70%] mx-5">
      <Range
        value={values}
        min={1}
        max={5}
        range
        step={0.2}
        marks={marks}
        onChange={(val) => {
          console.log(val);
          setValues(val);
        }}
        // className={`${styles.rcSliderHandle}`}
      />
    </div>
  );
}
export default RangeSlide;
