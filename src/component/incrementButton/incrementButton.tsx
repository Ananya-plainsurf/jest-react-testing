import React, { useEffect, useState } from "react";

export const handleIncrement = (currentCount: number) => {
  return currentCount + 1;
};

export const handleDecrement = (currentCount: number) => {
  return currentCount === 0 ? 0 : currentCount - 1;
};
const IncrementButton: React.FC = () => {
  const [count, setCount] = useState(0);
  const [isLoading,setIsLoading] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
        setIsLoading(true);
    },500)
  },[])

  return (
    <div>
      <p>Count: {count}</p>
      <button type="button" onClick={() => setCount(handleIncrement(count))}>
        Increment
      </button>
      <button type="button" onClick={() => setCount(handleDecrement(count))}>
        Decrement
      </button>

      <div>
        {isLoading?(<h6>Loading...</h6>):null}
      </div>
    </div>
  );
};

export default IncrementButton;
