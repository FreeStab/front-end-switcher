import { createSignal } from "solid-js";

function Component() {
  const [count, setCount] = createSignal(0);

  return <div>{count()}</div>;
}

export default Component;
