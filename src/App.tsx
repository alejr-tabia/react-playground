import React, { useReducer } from "react";

type Action = {
  type: "increase" | "decrease" | "reset";
  amount?: number;
};

const reducer = (state: number, action: Action): number => {
  switch (action.type) {
    case "increase":
      state = state + (action.amount || 1);
      break;
    case "decrease":
      state = state - (action.amount || 1);
      break;
    case "reset":
      state = 0;
  }
  return state;
};

function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      {count}

      <button onClick={() => dispatch({ type: "increase", amount: 1 })}>
        aumentar 1
      </button>
      <button onClick={() => dispatch({ type: "increase", amount: 10 })}>
        aumentar 10
      </button>
      <button onClick={() => dispatch({ type: "decrease", amount: 1 })}>
        diminuir 1
      </button>
      <button onClick={() => dispatch({ type: "decrease", amount: 10 })}>
        diminuir 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}

export default App;
