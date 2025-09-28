import { Component } from "@angular/core";

@Component({
  selector: "app-select",
  template: `
    <div>
      <h3>Single Select</h3>
      <label for="country">Country:</label>
      <select id="country" [(ngModel)]="selectedCountry">
        <option value="">Select a country</option>
        <option *ngFor="let country of countries" [value]="country.code">
          {{ country.name }}
        </option>
      </select>
      <p>Selected: {{ selectedCountry }}</p>

      <h3>Multiple Select</h3>
      <label for="skills">Skills:</label>
      <select id="skills" [(ngModel)]="selectedSkills" multiple>
        <option *ngFor="let skill of skills" [value]="skill.id">
          {{ skill.name }}
        </option>
      </select>
      <p>Selected: {{ selectedSkills.join(", ") }}</p>
    </div>
  `,
})
export class SelectComponent {
  selectedCountry = "";
  selectedSkills: string[] = [];

  countries = [
    { code: "us", name: "United States" },
    { code: "ca", name: "Canada" },
    { code: "uk", name: "United Kingdom" },
    { code: "fr", name: "France" },
    { code: "de", name: "Germany" },
  ];

  skills = [
    { id: "js", name: "JavaScript" },
    { id: "ts", name: "TypeScript" },
    { id: "vue", name: "Vue.js" },
    { id: "react", name: "React" },
    { id: "node", name: "Node.js" },
  ];
}
