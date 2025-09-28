import { useState } from "react";

function Component() {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

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
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        Accept terms and conditions
      </label>
      <p>Accepted: {isChecked.toString()}</p>

      <h3>Multiple Checkboxes</h3>
      {options.map((option) => (
        <label key={option.id}>
          <input
            type="checkbox"
            checked={selectedOptions.includes(option.id)}
            onChange={() => handleCheckboxChange(option.id)}
          />
          {option.label}
        </label>
      ))}
      <p>Selected: {selectedOptions.join(", ")}</p>
    </div>
  );
}

export default Component;
