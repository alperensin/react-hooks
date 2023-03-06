import { forwardRef, useRef, useImperativeHandle } from "react";

export default function HookUseImperativeHandle() {
  const formRef = useRef(null);

  function handleSubmit() {
    formRef.current.submit();
  }

  return (
    <div style={{ padding: "24px", background: "#FFFFFF" }}>
      <h1>useImperativeHandle</h1>
      <Form ref={formRef} />
      <br /><br />
      <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

const Form = forwardRef((_props, ref) => {
  const inputRef = useRef(null);

  function handleSubmit() {
    alert(inputRef.current.value);
  }

  useImperativeHandle(
    ref, // referral forwarded
    () => { // the value returned by the function is the value that the reference will assume when accessed through the ref.current path
      return {
        submit: handleSubmit
      }
    },
    [] // dependency array
  )

  return (
    <form>
      <input ref={inputRef} />
    </form>
  )
});