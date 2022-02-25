import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementBy } from "../slices/counterSlice";

const Counter = () => {
  const counterValue = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const counterInput = useRef();
  const [incrementValue, setIncrementValue] = useState(0);
  const handleInput = (e) => {
    setIncrementValue(e.target.value);
  };
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementBy = () => {
    const incrementValueInInt = parseInt(incrementValue);
    if (isNaN(incrementValueInInt)) {
      counterInput.current.value = "";
      setIncrementValue(0);
      return;
    }
    dispatch(incrementBy(incrementValueInInt));
    counterInput.current.value = "";
    setIncrementValue(0);
  };
  return (
    <div className="flex justify-center py-16">
      <div className="rounded-xl border border-purple-700 p-8 shadow-xl">
        <p className="text-3xl">
          Counter:
          <span className="ml-4 text-3xl text-purple-700">{counterValue}</span>
        </p>
        <div className="mt-8 flex gap-4 text-white">
          <button
            onClick={handleIncrement}
            className="rounded-md bg-green-500 p-2 capitalize transition-all duration-300 hover:bg-green-600"
          >
            increment
          </button>
          <button
            onClick={handleDecrement}
            className="rounded-md bg-rose-500 p-2 capitalize transition-all duration-300 hover:bg-rose-700"
          >
            decrement
          </button>
          <button
            onClick={handleIncrementBy}
            className="rounded-md bg-amber-500 p-2 capitalize transition-all duration-300 hover:bg-amber-600"
          >
            increment by
          </button>
          <input
            className="border border-black text-black"
            onChange={handleInput}
            ref={counterInput}
            type="text"
            name="counter"
            id="counter"
          />
        </div>
      </div>
    </div>
  );
};

export default Counter;
