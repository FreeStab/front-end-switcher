import { Component } from "@angular/core";

@Component({
  selector: "app-radio",
  template: `
    <div>
      <h3>Programming Language</h3>
      <label *ngFor="let language of languages">
        <input
          [(ngModel)]="selectedLanguage"
          [value]="language.id"
          type="radio"
          name="language"
        />
        {{ language.label }}
      </label>
      <p>Selected: {{ selectedLanguage }}</p>

      <h3>Experience Level</h3>
      <label *ngFor="let level of experienceLevels">
        <input
          [(ngModel)]="selectedLevel"
          [value]="level.id"
          type="radio"
          name="experience"
        />
        {{ level.label }}
      </label>
      <p>Experience: {{ selectedLevel }}</p>
    </div>
  `,
})
export class RadioComponent {
  selectedLanguage = "javascript";
  selectedLevel = "intermediate";

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
