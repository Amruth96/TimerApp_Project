import React, { useState, useEffect, useRef } from 'react'; 
import './TimerApp.css'; 

function TimerApp() {
  // State to store the current time of the timer (in seconds)
  const [time, setTime] = useState(0);

  // useRef to store the interval ID so we can clear it later
  const intervalRef = useRef(null);


  const startTimer = () => {
    if (intervalRef.current !== null) return; // Prevent starting a new timer if one is already running
    
    // Set a new interval that updates the time every second (1000 ms)
    intervalRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000); 
  };

  
  const stopTimer = () => {
    // If the interval is set (meaning the timer is running), clear it
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);  // Clear the interval to stop the timer
      intervalRef.current = null;  // Reset the intervalRef to null after stopping the timer
    }
  };

  
  const resetTimer = () => {
    stopTimer();  // Stop the timer (if running)
    setTime(0);    // Reset the time state to 0
  };

  // useEffect to perform cleanup when the component unmounts or the interval changes
  useEffect(() => {
    return () => {
      // Cleanup function that is called when the component unmounts or before the effect is re-run
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);  // Clear the interval to avoid memory leaks
      }
    };
  }, []); // Empty dependency array

  return (
    <div className="timer-container">
      
      <h1 className="timer-display">Timer: {time} seconds</h1>
      
     
      <div className="button-container">
     
        <button className="btn start-btn" onClick={startTimer}>Start</button>
     
        <button className="btn stop-btn" onClick={stopTimer}>Stop</button>
        
        <button className="btn reset-btn" onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default TimerApp; 