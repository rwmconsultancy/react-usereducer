import React, { useReducer } from "react";
import "./App.css";

const initalState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return { count: 0 };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <div className="App">
      <header className="App-header">
        Let's see how the reducer works in a simple counter example.
        <h1>Count: {state.count}</h1>
        <div>
          <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
            +
          </button>
          <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
            -
          </button>
          <br />
          <button onClick={() => dispatch({ type: "reset" })}>reset</button>
        </div>
      </header>
    </div>
  );
}

export default App;
