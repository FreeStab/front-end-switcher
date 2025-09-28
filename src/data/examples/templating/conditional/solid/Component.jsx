import { createSignal } from "solid-js";
import { Show } from "solid-js";

function Component() {
  const [isVisible, setIsVisible] = createSignal(true);
  const [count, setCount] = createSignal(3);

  const toggle = () => {
    setIsVisible(!isVisible());
    setCount(count() + 1);
  };

  return (
    <div>
      <button onClick={toggle}>Toggle</button>

      <Show when={isVisible()} fallback={<p>This is hidden!</p>}>
        <p>This is visible!</p>
      </Show>

      <Show when={isVisible()}>
        <div>
          <h3>Conditional Content</h3>
          <Show
            when={count() > 5}
            fallback={
              <Show when={count() > 0} fallback={<p>Count is 0 or negative</p>}>
                <p>Count is between 1 and 5: {count()}</p>
              </Show>
            }
          >
            <p>Count is greater than 5: {count()}</p>
          </Show>
        </div>
      </Show>
    </div>
  );
}

export default Component;
