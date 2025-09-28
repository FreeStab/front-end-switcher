import { createSignal, createMemo } from "solid-js";

function Component() {
  const [count, setCount] = createSignal(0);
  const doubleCount = createMemo(() => count() * 2);

  return (
    <div>
      <div>{count()}</div>
      <div>{doubleCount()}</div>
    </div>
  );
}

export default Component;
