import { createSignal, onMount } from "solid-js";

function Component() {
  const [message, setMessage] = createSignal("");

  onMount(() => {
    setMessage("Component mounted!");
    console.log("Component mounted");
  });

  return <div>{message()}</div>;
}

export default Component;
