import { createSignal } from "solid-js";
import { For } from "solid-js";

function Component() {
  const [isChecked, setIsChecked] = createSignal(false);
  const [selectedOptions, setSelectedOptions] = createSignal([]);

  const options = [
    { id: "javascript", label: "JavaScript" },
    { id: "typescript", label: "TypeScript" },
    { id: "vue", label: "Vue.js" },
    { id: "react", label: "React" },
  ];

  const handleCheckboxChange = (optionId) => {
    setSelectedOptions((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    );
  };

  return (
    <div>
      <h3>Single Checkbox</h3>
      <label>
        <input
          type="checkbox"
          checked={isChecked()}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        Accept terms and conditions
      </label>
      <p>Accepted: {isChecked().toString()}</p>

      <h3>Multiple Checkboxes</h3>
      <For each={options}>
        {(option) => (
          <label>
            <input
              type="checkbox"
              checked={selectedOptions().includes(option.id)}
              onChange={() => handleCheckboxChange(option.id)}
            />
            {option.label}
          </label>
        )}
      </For>
      <p>Selected: {selectedOptions().join(", ")}</p>
    </div>
  );
}

export default Component;
