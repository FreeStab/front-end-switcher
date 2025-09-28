import { createSignal } from "solid-js";

function Component() {
  const [count, setCount] = createSignal(0);

  const handleClick = () => {
    setCount(count() + 1);
    console.log("Button clicked!");
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p>Clicked {count()} times</p>
    </div>
  );
}

export default Component;
