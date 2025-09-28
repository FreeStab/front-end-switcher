import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-input",
  template: `
    <div>
      <label for="username">Username:</label>
      <input
        id="username"
        [(ngModel)]="username"
        type="text"
        placeholder="Enter your username"
        (input)="handleInput($event)"
      />
      <p>Current value: {{ username() }}</p>
      <p>Length: {{ username().length }}</p>
    </div>
  `,
  standalone: true,
  imports: [FormsModule],
})
export class InputComponent {
  username = signal("");

  handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.username.set(target.value);
    console.log("Input changed:", target.value);
  }
}
