import { useState } from "react";

function Component() {
  const [count, setCount] = useState(0);

  return <div>{count}</div>;
}

export default Component;
