import { useEffect, useRef, useState } from "react";
import './Focus.css';  

const Counter = () => {
  const prevCountRef = useRef(0); // useRef to store the previous count
  const [countValue, setCountValue] = useState(0); // useState to manage the count value

  const handleInc = () => {
    setCountValue(countValue + 40); 
  };

  // useEffect to update the previous count value
  useEffect(() => {
    prevCountRef.current = countValue;
  }, [countValue]);

  return (
    <div className="counter-container">
      <p className="counter-text">Count Value = {countValue}</p>
      <button className="increment-btn" onClick={handleInc}>Increment</button>
      <p className="previous-counter-text">Previous Count Value = {prevCountRef.current}</p>
    </div>
  );
};

export default Counter;
