import { Component } from "@angular/core";

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
      <p>Current value: {{ username }}</p>
      <p>Length: {{ username.length }}</p>
    </div>
  `,
})
export class InputComponent {
  username = "";

  handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log("Input changed:", target.value);
  }
}
