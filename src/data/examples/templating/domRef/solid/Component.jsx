import { createSignal } from "solid-js";

function Component() {
  let inputRef;
  const [inputValue, setInputValue] = createSignal("");

  const focusInput = () => {
    inputRef.focus();
    setInputValue(inputRef.value);
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me!" />
      <button onClick={focusInput}>Focus Input</button>
      <p>Input value: {inputValue()}</p>
    </div>
  );
}

export default Component;
