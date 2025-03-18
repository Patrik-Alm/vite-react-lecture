import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const [person, setPerson] = useState({});

//   let number = 0;

  const incementHandler = () => {
    setCounter(counter +1)
    // number = number + 1;
    // console.log(number);
  };

  return (
    <div className="container">
      <h3>Counter: {counter} </h3>

      <button className="btn btn-success mx-1" onClick={incementHandler}>
        Increment
      </button>

      <button
        className="btn btn-danger mx-1"
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrement
      </button>

      <button className="btn btn-warning mx-1" onClick={() => setCounter(0)}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
