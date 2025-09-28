import { useState } from "react";

function Component() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log("Button clicked!");
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p>Clicked {count} times</p>
    </div>
  );
}

export default Component;
