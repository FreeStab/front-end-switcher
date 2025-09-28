import { useEffect } from "react";

function Component() {
  useEffect(() => {
    return () => {
      console.log("Component will unmount");
      // Cleanup logic here
    };
  }, []);

  return <div>Component will cleanup on unmount</div>;
}

export default Component;
