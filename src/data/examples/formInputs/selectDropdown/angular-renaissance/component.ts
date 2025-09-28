import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-select",
  template: `
    <div>
      <h3>Single Select</h3>
      <label for="country">Country:</label>
      <select
        id="country"
        [value]="selectedCountry()"
        (change)="updateCountry($event)"
      >
        <option value="">Select a country</option>
        @for (country of countries; track country.code) {
        <option [value]="country.code">{{ country.name }}</option>
        }
      </select>
      <p>Selected: {{ selectedCountry() }}</p>

      <h3>Multiple Select</h3>
      <label for="skills">Skills:</label>
      <select
        id="skills"
        [value]="selectedSkills()"
        (change)="updateSkills($event)"
        multiple
      >
        @for (skill of skills; track skill.id) {
        <option [value]="skill.id">{{ skill.name }}</option>
        }
      </select>
      <p>Selected: {{ selectedSkills().join(", ") }}</p>
    </div>
  `,
  standalone: true,
  imports: [FormsModule],
})
export class SelectComponent {
  selectedCountry = signal("");
  selectedSkills = signal<string[]>([]);

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

  updateCountry(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedCountry.set(target.value);
  }

  updateSkills(event: Event) {
    const target = event.target as HTMLSelectElement;
    const values = Array.from(target.selectedOptions, (option) => option.value);
    this.selectedSkills.set(values);
  }
}
