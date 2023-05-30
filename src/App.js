import './App.css';
import { useState, useReducer } from "react";
import counterReducer from "./reducers/counterReducer"

function App() {

  const [counter, dispatch] = useReducer(counterReducer, 10);
  const [inputValue, setInputValue] = useState(counter);

  const mathArr = ['Add', 'Subtract', 'Multiply', 'Divide', 'Power', 'Remainder', 'Square Root']

  return (

    <div className="App App-header">
      <h1>Counter: {counter}</h1>

      <input
        type='number'
        onChange={(e) => { setInputValue(Number(e.target.value)) }}
      ></input>

      <button onClick={() => {
        dispatch({
          type: "RESET",
        })
      }}>Reset</button>

      {/* <button onClick={() => {
        dispatch({
          type: "Increase",
        })
      }}>Add</button>

      <button onClick={() => {
        dispatch({
          type: "Decrease",
        })
      }}>Subtract</button>

      */}

      {/* <button
      onClick={() => {
        dispatch({
          type:"augment",
          value: inputValue
        })
      }}>
        Add by input
      </button>

      <button
      onClick={() => {
        dispatch({
          type:"decrease",
          value: inputValue
        })
      }}>
        Decrease by input
      </button> */}

      {mathArr.map((element) => {
        return (
          <button
          onClick={() => {
            dispatch({
              type: element,
              value: inputValue,
            })
          }}>{element}</button>
        )
      })
      }

    </div>
  );
}

export default App;
