import { useState } from "react";

function Component() {
  const [isVisible, setIsVisible] = useState(true);
  const [count, setCount] = useState(3);

  const toggle = () => {
    setIsVisible(!isVisible);
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {isVisible ? <p>This is visible!</p> : <p>This is hidden!</p>}

      {isVisible && (
        <div>
          <h3>Conditional Content</h3>
          {count > 5 ? (
            <p>Count is greater than 5: {count}</p>
          ) : count > 0 ? (
            <p>Count is between 1 and 5: {count}</p>
          ) : (
            <p>Count is 0 or negative</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Component;
