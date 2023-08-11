import { useDispatch, useSelector } from "react-redux";

import {
  increment,
  decrement,
  addIncrmentWithAmount,
  reset,
} from "./counterSlice";

import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);

  const addAmount = Number(amount) || 0;

  return (
    <div className="flex flex-col items-center gap-4 border w-5/12 m-auto my-10 shadow-lg p-10">
      <p className="text-xl text-blue-500">{count}</p>
      <div className="space-x-5">
        <button
          onClick={() => dispatch(increment())}
          className="p-2 w-14 bg-green-500"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="p-2 w-14 bg-red-500"
        >
          -
        </button>
      </div>

      <div className="flex flex-col items-center my-3 gap-3">

        <input
          type="text"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          className="w-40 bg-gray-200 px-3 py-2 text-center"
        />

        <button
          onClick={() => dispatch(addIncrmentWithAmount(addAmount))}
          className="p-2 w-40 bg-purple-500"
        >
          Add Amount
        </button>

        <button
          onClick={() => {
            setAmount(0);
            dispatch(reset());
          }}
          className="p-2 w-40 bg-red-500"
        >
          Reset
        </button>

      </div>
    </div>
  );
};

export default Counter;
