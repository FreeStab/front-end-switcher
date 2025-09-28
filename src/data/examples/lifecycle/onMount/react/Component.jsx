import { useState, useEffect } from "react";

function Component() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("Component mounted!");
    console.log("Component mounted");
  }, []);

  return <div>{message}</div>;
}

export default Component;
