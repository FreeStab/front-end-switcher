import { onCleanup } from "solid-js";

function Component() {
  onCleanup(() => {
    console.log("Component will unmount");
    // Cleanup logic here
  });

  return <div>Component will cleanup on unmount</div>;
}

export default Component;
