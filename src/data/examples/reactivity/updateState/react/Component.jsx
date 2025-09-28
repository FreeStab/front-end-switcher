import { useState } from "react";

function Component() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Component;
