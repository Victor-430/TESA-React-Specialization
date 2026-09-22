import { useState } from "react";

export function BadCounter() {
  const [count, setCount] = useState(0);
  console.log('RENDER — count is', count);

  const handleClick = () => {
    console.log('CLICK — handleClick called, count in THIS closure is', count);
    setTimeout(() => {
      console.log('TIMEOUT FIRING — about to run setCount(' + count + ' + 1)');
      setCount(count + 1);
    }, 1000);
  };

  return <button onClick={handleClick}>{count}</button>;
}