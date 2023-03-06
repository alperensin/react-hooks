import { useState, useCallback } from "react";

const fnCounter = new Set();

export default function HookUseCallback() {
  const [counter, setCounter] = useState(0);

  // Without useCallback - function
  // function handlePlus() {
  //   setCounter(prevState => prevState + 1);
  // }

  // Without useCallback - const
  // const handlePlus = () => {
  //   setCounter(prevState => prevState + 1);
  // };

  const handlePlus = useCallback(() => {
    setCounter(prevState => prevState + 1);
  }, [])

  // With useCallback the function is not created in other renderings of the component and the same instance is always stored in the set
  fnCounter.add(handlePlus)

  return (
    <div style={{ padding: "24px", background: "#EEEEEE" }}>
      <h1>useCallback - {counter}</h1>
      <h2>Total functions - {fnCounter.size}</h2>
      <Button onClick={handlePlus} />
    </div>
  );
}

function Button(props) {
  return (
    <button type="button" onClick={props.onClick} >+</button>
  )
}