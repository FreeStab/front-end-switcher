import { useState } from "react";

function Component() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);

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
      <label htmlFor="country">Country:</label>
      <select
        id="country"
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
      <p>Selected: {selectedCountry}</p>

      <h3>Multiple Select</h3>
      <label htmlFor="skills">Skills:</label>
      <select
        id="skills"
        multiple
        value={selectedSkills}
        onChange={handleSkillsChange}
      >
        {skills.map((skill) => (
          <option key={skill.id} value={skill.id}>
            {skill.name}
          </option>
        ))}
      </select>
      <p>Selected: {selectedSkills.join(", ")}</p>
    </div>
  );
}

export default Component;
