import { useState } from "react";

function Component() {
  const [username, setUsername] = useState("");

  const handleInput = (event) => {
    setUsername(event.target.value);
    console.log("Input changed:", event.target.value);
  };

  return (
    <>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        value={username}
        placeholder="Enter your username"
        onChange={handleInput}
      />
      <p>Current value: {username}</p>
    </>
  );
}

export default Component;
