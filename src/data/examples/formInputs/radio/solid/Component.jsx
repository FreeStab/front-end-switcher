import { createSignal } from "solid-js";
import { For } from "solid-js";

function Component() {
  const [selectedLanguage, setSelectedLanguage] = createSignal("javascript");
  const [selectedLevel, setSelectedLevel] = createSignal("intermediate");

  const languages = [
    { id: "javascript", label: "JavaScript" },
    { id: "typescript", label: "TypeScript" },
    { id: "python", label: "Python" },
    { id: "rust", label: "Rust" },
  ];

  const experienceLevels = [
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" },
    { id: "expert", label: "Expert" },
  ];

  return (
    <div>
      <h3>Programming Language</h3>
      <For each={languages}>
        {(language) => (
          <label>
            <input
              type="radio"
              name="language"
              value={language.id}
              checked={selectedLanguage() === language.id}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            />
            {language.label}
          </label>
        )}
      </For>
      <p>Selected: {selectedLanguage()}</p>

      <h3>Experience Level</h3>
      <For each={experienceLevels}>
        {(level) => (
          <label>
            <input
              type="radio"
              name="experience"
              value={level.id}
              checked={selectedLevel() === level.id}
              onChange={(e) => setSelectedLevel(e.target.value)}
            />
            {level.label}
          </label>
        )}
      </For>
      <p>Experience: {selectedLevel()}</p>
    </div>
  );
}

export default Component;
