import { useState } from "react";
import styles from "./Component.module.css";

function Component() {
  const [isActive, setIsActive] = useState(true);

  const inlineStyles = {
    color: "blue",
    fontSize: "16px",
  };

  return (
    <div className={styles.container}>
      <p className={isActive ? styles.active : ""} style={inlineStyles}>
        Styled content
      </p>
    </div>
  );
}

export default Component;
