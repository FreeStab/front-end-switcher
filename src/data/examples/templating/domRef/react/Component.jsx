import { useRef, useState } from "react";

function Component() {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  const focusInput = () => {
    inputRef.current.focus();
    setInputValue(inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me!" />
      <button onClick={focusInput}>Focus Input</button>
      <p>Input value: {inputValue}</p>
    </div>
  );
}

export default Component;
