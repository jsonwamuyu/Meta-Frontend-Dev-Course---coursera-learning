import { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleDecrease = () => {
    setCounter((prev) => prev - 1);
  };

  const handleIncrease = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <section className="container app-counter">
      <h1 className="counter-heading">Counter: {counter}</h1>
      <div className="button-container">
        <button className="counter-button" onClick={handleIncrease}>
          Increase +
        </button>
        <button className="counter-button" onClick={handleDecrease}>
          Decrease -
        </button>
      </div>
    </section>
  );
};

export default Counter;
