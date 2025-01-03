import React, { useState } from "react";

export const handleIncrement = (currentCount: number) => {
  return currentCount + 1;
};

export const handleDecrement = (currentCount: number) => {
  return currentCount === 0 ? 0 : currentCount - 1;
};
const IncrementButton: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button type="button" onClick={() => setCount(handleIncrement(count))}>
        Increment
      </button>
      <button type="button" onClick={() => setCount(handleDecrement(count))}>
        Decrement
      </button>
    </div>
  );
};

export default IncrementButton;
