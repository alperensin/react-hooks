import { useReducer } from "react";

// reducer function, always need to return something
function reducer(state, action) {
  switch (action.type) {
    case 'plus':
      return {
        ...state,
        counter: state.counter + 1,
        clicks: state.clicks + 1,
      };
    case 'minus':
      return {
        ...state,
        counter: state.counter - 1,
        clicks: state.clicks + 1,
      };
  
    default:
      return state;
  }
};

// reducer's initialValue
const initialValue = {
  counter: 0,
  clicks: 0
};

// initialize - function that receives the initial value and is executed only once when the component is mounted on the screen, it returns a value and this returned value will in fact be the initialValue of the reducer
function initialize(initialValue) {
  return initialValue;
}

export default function HookUseReducer() {
  const [state, dispatch] = useReducer(
    reducer,
    initialValue,
    initialize
  )

  function handlePlus() {
    dispatch({ type: 'plus' })
  }

  function handleMinus() {
    dispatch({ type: 'minus' })
  }

  return (
    <div style={{ padding: "24px", background: "#FFFFFF" }}>
      <h1>useReducer</h1>
      <h2>{state.counter}</h2>
      <p>Clicks: {state.clicks}</p>
      <button type="button" onClick={handlePlus} >+</button>
      <button type="button" onClick={handleMinus} >-</button>
    </div>
  );
}