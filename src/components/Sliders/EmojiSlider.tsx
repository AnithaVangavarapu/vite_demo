import React, { useState, useEffect } from "react";

const EmojiSlider = () => {
  const [value, setValue] = useState(1);
  const [emoji, setEmoji] = useState("😠");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };
  let per;
  useEffect(() => {
    if (value <= 2) {
      setEmoji("😠");
    } else if (value > 2 && value <= 4) {
      setEmoji("🙁");
    } else if (value > 4 && value <= 6) {
      setEmoji("😀");
    } else if (value > 6 && value <= 8) {
      setEmoji("😄");
    } else if (value > 8 && value <= 10) {
      setEmoji("😇");
    }
  }, [value]);
  per = (value / 5) * 100;
  return (
    <div className="container mx-auto w-[100%]">
      {value}
      <div className="flex relative items-center">
        <div
          className={``}
          style={{
            transform: `translateX(${value * 100}px)`,
          }}
        >
          {emoji}
        </div>
        <input
          type="range"
          min={1}
          max={10}
          defaultValue={value}
          onChange={handleChange}
          className={`w-[100%] ${value <= 2 && "accent-red-600"} ${
            value <= 4 && value > 2 && "accent-red-400"
          } ${value <= 6 && value > 4 && "accent-yellow-600"} ${
            value <= 8 && value > 6 && "accent-green-400"
          } ${value <= 10 && value > 8 && "accent-green-600"} `}
        />
      </div>
    </div>
  );
};

export default EmojiSlider;
