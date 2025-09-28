import { createSignal } from "solid-js";
import { For } from "solid-js";

function Component() {
  const [selectedCountry, setSelectedCountry] = createSignal("");
  const [selectedSkills, setSelectedSkills] = createSignal([]);

  const countries = [
    { code: "us", name: "United States" },
    { code: "ca", name: "Canada" },
    { code: "uk", name: "United Kingdom" },
    { code: "fr", name: "France" },
    { code: "de", name: "Germany" },
  ];

  const skills = [
    { id: "js", name: "JavaScript" },
    { id: "ts", name: "TypeScript" },
    { id: "vue", name: "Vue.js" },
    { id: "react", name: "React" },
    { id: "node", name: "Node.js" },
  ];

  const handleSkillsChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedSkills(selectedOptions);
  };

  return (
    <div>
      <h3>Single Select</h3>
      <label for="country">Country:</label>
      <select
        id="country"
        value={selectedCountry()}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option value="">Select a country</option>
        <For each={countries}>
          {(country) => <option value={country.code}>{country.name}</option>}
        </For>
      </select>
      <p>Selected: {selectedCountry()}</p>

      <h3>Multiple Select</h3>
      <label for="skills">Skills:</label>
      <select id="skills" multiple onChange={handleSkillsChange}>
        <For each={skills}>
          {(skill) => <option value={skill.id}>{skill.name}</option>}
        </For>
      </select>
      <p>Selected: {selectedSkills().join(", ")}</p>
    </div>
  );
}

export default Component;
