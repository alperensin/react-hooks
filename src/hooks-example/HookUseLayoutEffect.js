import { useLayoutEffect, useState } from "react";

/**
 * 
 * useLayoutEffect is used in the same way as useEffect. 
 * The difference between them is when it is executed. 
 * The useLayoutEffect is executed after react computes the changes and before displaying the changes to the user, synchronously. 
 * This way the user will only see the changes after executing the useLayoutEffect function. 
 * This way the screen may freeze if the function processing is too cumbersome. 
 * The useEffect, on the other hand, runs asynchronously after the user receives/views the changes on the screen.
 * 
 */

export default function HookUseLayoutEffect() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  function handlePlus() {
    setCounter(prevState => prevState + 1);
  }

  function handleMinus() {
    setCounter(prevState => prevState - 1);
  }

  useLayoutEffect(() => {
    console.log("useLayoutEffect runs every time the component is rendered.");

    // One of the possibilities to work with asynchronous functions inside useLayoutEffect
    // IIFE (Immediately Invoked Function Expression)
    // (async () => {
    //   await getDataAPI();
    // })();

    // Is executed when the component goes to unmount
    return () => {
      console.log("component will unmounted.")
    };
  });

  useLayoutEffect(() => {
    console.log("useLayoutEffect runs only the first time the component is rendered");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect runs the first time the component is rendered and every time the counter state changes");
  }, [counter]);

  return (
    <div style={{ padding: "24px", background: "#EEEEEE" }}>
      <h1>useLayoutEffect - {counter}</h1>
      <input name="name" type="text" placeholder="name state" value={name} onChange={e => setName(e.target.value)} />
      <br /> <br />
      <button type="button" onClick={handlePlus} >+</button>
      <button type="button" onClick={handleMinus} >-</button>
    </div>
  );
}