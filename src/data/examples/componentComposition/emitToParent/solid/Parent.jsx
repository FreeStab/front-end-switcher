import { createSignal } from "solid-js";
import ChildComponent from "./ChildComponent";

function Parent() {
  const [count, setCount] = createSignal(0);

  const handleIncrement = () => {
    setCount(count() + 1);
  };

  const handleDecrement = () => {
    setCount(count() - 1);
  };

  return (
    <div>
      <p>Count: {count()}</p>
      <ChildComponent
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}

export default Parent;
