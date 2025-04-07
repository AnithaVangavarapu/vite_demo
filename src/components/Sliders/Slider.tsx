import { Circle } from "lucide-react";
import { useState } from "react";
const Slider = () => {
  const [status, setStatus] = useState(0);
  const values = [
    "below average",
    "average",
    "good",
    "excellent",
    "outstanding",
  ];
  // const values = ["1", "2", "3", "4", "5"];
  const handlePrevious = () => {
    if (status === 0) {
      return;
    } else {
      setStatus(status - 1);
    }
  };
  const handleNext = () => {
    if (status === values.length - 1) {
      return;
    } else {
      setStatus(status + 1);
    }
  };
  const itemWidth = 100 / values.length;
  console.log(itemWidth);
  return (
    <div className="mx-10 ">
      <div
        className={`flex justify-between border rounded-md border-gray-400 `}
        style={{
          background: `linear-gradient(to right, #3b82f6 ${
            status * (100 / (values.length - 1))
          }%, #e5e7eb ${status * (100 / (values.length - 1))}%)`,
        }}
      >
        {values.map((_, idx) => (
          <div
            key={idx}
            className={` flex justify-center items-center h-2 w-fit `}
          >
            <Circle
              fill={status === idx || idx <= status ? "#3b82f6" : "white"}
              color="blue"
              className="h-6 stroke-1"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-between ">
        {values.map((value, idx) => (
          <div key={idx} className="">
            {value}
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="border rounded-md px-1 bg-blue-500 text-white mt-2 mx-4"
          onClick={handlePrevious}
        >
          Prev
        </button>
        <button
          className="border rounded-md px-1 bg-blue-500 text-white mt-2"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
