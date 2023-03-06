import { useState, useCallback, useMemo } from "react";

export default function HookUseMemo() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  // useMemo does not return the function like useCallback, it returns the execution of the function
  const total = useMemo(() => {
    console.log('Running only when changing state of counter')
    return counter + 100000000
  }, [counter]);

  const handlePlus = useCallback(() => {
    setCounter(prevState => prevState + 1);
  }, [])

  return (
    <div style={{ padding: "24px", background: "#FFFFFF" }}>
      <h1>useMemo</h1>
      <h4>Counter: {counter}</h4>
      <h4>Name: {name}</h4>
      <h4>Total {total}</h4>
      <input name="name" type="text" placeholder="name state" value={name} onChange={e => setName(e.target.value)} />
      <br /><br />
      <Button onClick={handlePlus} />
    </div>
  );
}

function Button(props) {
  return (
    <button type="button" onClick={props.onClick} >+</button>
  )
}