import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-radio",
  template: `
    <div>
      <h3>Programming Language</h3>
      @for (language of languages; track language.id) {
      <label>
        <input
          [value]="language.id"
          [checked]="selectedLanguage() === language.id"
          (change)="selectedLanguage.set(language.id)"
          type="radio"
          name="language"
        />
        {{ language.label }}
      </label>
      }
      <p>Selected: {{ selectedLanguage() }}</p>

      <h3>Experience Level</h3>
      @for (level of experienceLevels; track level.id) {
      <label>
        <input
          [value]="level.id"
          [checked]="selectedLevel() === level.id"
          (change)="selectedLevel.set(level.id)"
          type="radio"
          name="experience"
        />
        {{ level.label }}
      </label>
      }
      <p>Experience: {{ selectedLevel() }}</p>
    </div>
  `,
  standalone: true,
  imports: [FormsModule],
})
export class RadioComponent {
  selectedLanguage = signal("javascript");
  selectedLevel = signal("intermediate");

  languages = [
    { id: "javascript", label: "JavaScript" },
    { id: "typescript", label: "TypeScript" },
    { id: "python", label: "Python" },
    { id: "rust", label: "Rust" },
  ];

  experienceLevels = [
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" },
    { id: "expert", label: "Expert" },
  ];
}
