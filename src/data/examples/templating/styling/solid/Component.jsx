import { createSignal } from "solid-js";
import "./Component.css";

function Component() {
  const [isActive, setIsActive] = createSignal(true);

  const styles = () => ({
    color: "blue",
    fontSize: "16px",
  });

  return (
    <div class="container">
      <p classList={{ active: isActive() }} style={styles()}>
        Styled content
      </p>
    </div>
  );
}

export default Component;
