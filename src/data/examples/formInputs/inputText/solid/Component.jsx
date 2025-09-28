import { createSignal } from "solid-js";

function Component() {
  const [username, setUsername] = createSignal("");

  const handleInput = (event) => {
    setUsername(event.target.value);
    console.log("Input changed:", event.target.value);
  };

  return (
    <div>
      <label for="username">Username:</label>
      <input
        id="username"
        type="text"
        value={username()}
        placeholder="Enter your username"
        onInput={handleInput}
      />
      <p>Current value: {username()}</p>
      <p>Length: {username().length}</p>
    </div>
  );
}

export default Component;
