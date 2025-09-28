import { createSignal } from "solid-js";

function Component() {
  const [count, setCount] = createSignal(0);

  const increment = () => {
    setCount(count() + 1);
  };

  return (
    <div>
      <div>{count()}</div>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Component;
