import { useState } from "react";
import './Counter.css';  // Import the CSS file

const Counter = () => {
    const [countValue, setCountValue] = useState(0);  // defining state variable

    const handInc = () => {
        setCountValue(countValue + 1);  // Use countValue here
    };

    return (
        <div className="counter-container">
            <p className="counter-text">Count Value = {countValue}</p>
            <button className="increment-btn" onClick={handInc}>Increment</button>
        </div>
    );
};

export default Counter;
