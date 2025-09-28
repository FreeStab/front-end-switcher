import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-checkbox",
  template: `
    <div>
      <h3>Single Checkbox</h3>
      <label>
        <input
          [checked]="isChecked()"
          (change)="isChecked.set($any($event.target).checked)"
          type="checkbox"
        />
        Accept terms and conditions
      </label>
      <p>Accepted: {{ isChecked() }}</p>

      <h3>Multiple Checkboxes</h3>
      @for (option of options; track option.id) {
      <label>
        <input
          [checked]="selectedOptions().includes(option.id)"
          (change)="onCheckboxChange(option.id, $event)"
          type="checkbox"
        />
        {{ option.label }}
      </label>
      }
      <p>Selected: {{ selectedOptions().join(", ") }}</p>
    </div>
  `,
  standalone: true,
  imports: [FormsModule],
})
export class CheckboxComponent {
  isChecked = signal(false);
  selectedOptions = signal<string[]>([]);

  options = [
    { id: "javascript", label: "JavaScript" },
    { id: "typescript", label: "TypeScript" },
    { id: "vue", label: "Vue.js" },
    { id: "react", label: "React" },
  ];

  onCheckboxChange(optionId: string, event: Event) {
    const target = event.target as HTMLInputElement;
    this.selectedOptions.update((current) =>
      target.checked
        ? [...current, optionId]
        : current.filter((id) => id !== optionId)
    );
  }
}
