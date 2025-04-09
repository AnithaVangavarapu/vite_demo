import React from "react";
import "./rangeSlider.css";
import Range from "rc-slider";
import "rc-slider/assets/index.css";
type MarkOption = {
  [label: string]: string;
};
type MarksOption = {
  [key: number]: MarkOption;
};
type RangeValuesProps = {
  min: number;
  max: number;
};
interface RangeSlideProps {
  values: number[];
  rangeValues: RangeValuesProps;
  markList?: MarkOption[];
  step?: number;
  onChange: (val: number[]) => void;
}
const RangeSlide: React.FC<RangeSlideProps> = ({
  values,
  rangeValues,
  markList,
  step,
  onChange,
}) => {
  console.log("values", values);

  const marks: MarksOption = {};
  markList?.forEach((item, idx) => {
    const key = idx + 1;
    marks[key] = item;
  });

  return (
    <div className="m-10 w-[50%]">
      <div>
        ValueRange: {values[0]}-{values[1]}
      </div>
      <Range
        value={values}
        min={rangeValues.min}
        max={rangeValues.max}
        step={step ? step : undefined}
        range
        marks={marks}
        onChange={(val) => onChange(val as number[])}
      />
    </div>
  );
};
export default RangeSlide;
