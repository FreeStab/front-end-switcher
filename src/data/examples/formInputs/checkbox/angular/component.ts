import { Component } from "@angular/core";

@Component({
  selector: "app-checkbox",
  template: `
    <div>
      <h3>Single Checkbox</h3>
      <label>
        <input [(ngModel)]="isChecked" type="checkbox" />
        Accept terms and conditions
      </label>
      <p>Accepted: {{ isChecked }}</p>

      <h3>Multiple Checkboxes</h3>
      <label *ngFor="let option of options">
        <input
          [checked]="selectedOptions.includes(option.id)"
          (change)="onCheckboxChange(option.id, $event)"
          type="checkbox"
        />
        {{ option.label }}
      </label>
      <p>Selected: {{ selectedOptions.join(", ") }}</p>
    </div>
  `,
})
export class CheckboxComponent {
  isChecked = false;
  selectedOptions: string[] = [];

  options = [
    { id: "javascript", label: "JavaScript" },
    { id: "typescript", label: "TypeScript" },
    { id: "vue", label: "Vue.js" },
    { id: "react", label: "React" },
  ];

  onCheckboxChange(optionId: string, event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      this.selectedOptions = [...this.selectedOptions, optionId];
    } else {
      this.selectedOptions = this.selectedOptions.filter(
        (id) => id !== optionId
      );
    }
  }
}
