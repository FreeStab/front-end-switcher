import { createSignal, For } from "solid-js";

function Component() {
  const [items] = createSignal([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
  ]);

  return (
    <ul>
      <For each={items()}>{(item) => <li>{item.name}</li>}</For>
    </ul>
  );
}

export default Component;
