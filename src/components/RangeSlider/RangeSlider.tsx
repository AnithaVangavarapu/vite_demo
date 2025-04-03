import { useState } from "react";

const RangeSlider = () => {
  const [value, setValue] = useState("1");
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="px-2">
      <label>slider value: {value}</label>
      <input
        type="range"
        className="w-full "
        step={1}
        min={1}
        max={10}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="flex justify-between">
        {values.map((value, idx) => {
          return <div key={idx}>{value}</div>;
        })}
      </div>
    </div>
  );
};

export default RangeSlider;
