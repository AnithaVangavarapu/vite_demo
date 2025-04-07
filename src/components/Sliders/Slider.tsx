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
            onClick={() => setStatus(idx)}
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
    </div>
  );
};

export default Slider;
