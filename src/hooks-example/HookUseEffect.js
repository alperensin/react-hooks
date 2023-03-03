import { useEffect, useState } from "react";

export default function HookUseEffect() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  function handlePlus() {
    setCounter(prevState => prevState + 1);
  }

  function handleMinus() {
    setCounter(prevState => prevState - 1);
  }

  useEffect(() => {
    console.log("useEffect runs every time the component is rendered.");

    // One of the possibilities to work with asynchronous functions inside useEffect
    // IIFE (Immediately Invoked Function Expression)
    // (async () => {
    //   await getDataAPI();
    // })();

    // Is executed when the component goes to unmount
    return () => {
      console.log("component will unmounted.")
    };
  });

  useEffect(() => {
    console.log("useEffect runs only the first time the component is rendered");
  }, []);

  useEffect(() => {
    console.log("useEffect runs the first time the component is rendered and every time the counter state changes");
  }, [counter]);

  return (
    <div style={{ padding: "24px", background: "#FFFFFF" }}>
      <h1>useEffect - {counter}</h1>
      <input name="name" type="text" placeholder="name state" value={name} onChange={e => setName(e.target.value)} />
      <br /> <br />
      <button type="button" onClick={handlePlus} >+</button>
      <button type="button" onClick={handleMinus} >-</button>
    </div>
  );
}