import React, { useRef, useState, useEffect } from "react";
interface EmojiSliderProps {
  min: number;
  max: number;
  onChange: (val: string) => void;
  emojis: string[];
  colors: string[];
}
const EmojiSlider: React.FC<EmojiSliderProps> = ({
  min,
  max,
  onChange,
  emojis,
  colors,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [left, setLeft] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const getClientXTouchOrMouseEvent = (
    e: React.TouchEvent | React.MouseEvent | TouchEvent | MouseEvent
  ) => {
    if ("touches" in e) {
      return e.touches[0].clientX;
    } else {
      return e.clientX;
    }
  };
  const calculateLeft = (
    e: MouseEvent | TouchEvent | React.TouchEvent | React.MouseEvent
  ) => {
    if (!trackRef.current) return;
    const info = trackRef.current.getBoundingClientRect();
    console.log(info);
    const clientX = getClientXTouchOrMouseEvent(e);
    console.log(clientX);
    const rawLeft = clientX - info.left;
    const thumbPosition = Math.max(0, Math.min(rawLeft, info.width));
    setLeft(thumbPosition);
  };
  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (isDragging) {
        calculateLeft(e);
      }
    };

    const stopDragging = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("touchmove", handleMove);
      window.addEventListener("mouseup", stopDragging);
      window.addEventListener("touchend", stopDragging);
    }

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchend", stopDragging);
    };
  }, [isDragging]);
  const percent = left / (trackRef.current?.getBoundingClientRect().width || 1);
  const CalculatedValue = min + percent * (max - min);
  const index = Math.floor(percent * (emojis.length - 1));
  const currentEmoji = emojis[index];
  const currentColor = colors[index];
  useEffect(() => {
    onChange(currentEmoji);
  }, [currentEmoji]);
  return (
    <div className="m-10">
      <div ref={trackRef} className="relative rounded-lg h-3 bg-gray-400">
        <div
          className="absolute h-full rounded-lg"
          style={{
            width: `${left}px`,
            backgroundColor: currentColor,
          }}
        />
        <div
          className="absolute top-[-7px] cursor-pointer"
          onMouseDown={(e) => {
            setIsDragging(true), calculateLeft(e);
          }}
          onTouchStart={(e) => {
            setIsDragging(true), calculateLeft(e);
          }}
          style={{
            left: `${left - 10}px`,
            transition: isDragging ? "none" : "left 0.2s ease",
          }}
        >
          {currentEmoji}
        </div>
      </div>
    </div>
  );
};

export default EmojiSlider;
