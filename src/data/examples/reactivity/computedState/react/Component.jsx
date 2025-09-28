import { useState, useMemo } from "react";

function Component() {
  const [count, setCount] = useState(0);
  const doubleCount = useMemo(() => count * 2, [count]);

  return (
    <div>
      <div>{count}</div>
      <div>{doubleCount}</div>
    </div>
  );
}

export default Component;
