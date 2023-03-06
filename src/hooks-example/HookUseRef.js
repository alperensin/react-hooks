import { useRef } from "react";

export default function HookUseRef() {
  const number = useRef(0);
  const inputRef = useRef(null);

  function handleSetValue() {
    const newNumber = Math.round(Math.random() * (10 - 1) + 1);
    number.current = newNumber;
  }

  function handlePrintValue() {
    const values = { numberRef: number.current, inputRef: inputRef.current.value };
    alert(JSON.stringify(values))
    console.log(values);
  }

  return (
    <div style={{ padding: "24px", background: "#EEEEEE" }}>
      <h1>useRef</h1>
      <input ref={inputRef} />
      <br /><br />
      <button type="button" onClick={handleSetValue}>Set value</button>
      <button type="button" onClick={handlePrintValue}>Print value</button>
    </div>
  );
}