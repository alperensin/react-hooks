import { useState } from "react";

export default function HookUseState() {
  const [counter, setCounter] = useState(0);

  function handlePlus() {
    setCounter(prevState => prevState + 1);
  }

  function handleMinus() {
    setCounter(prevState => prevState - 1);
  }

  return (
    <div style={{ padding: "24px", background: "#EEEEEE" }}>
      <h1>useState - {counter}</h1>
      <button type="button" onClick={handlePlus} >+</button>
      <button type="button" onClick={handleMinus} >-</button>
    </div>
  );
}