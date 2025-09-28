import { Component, input } from "@angular/core";

@Component({
  selector: "app-child",
  template: `
    <div>
      <h1>{{ title() }}</h1>
      <p>Count: {{ count() }}</p>
      <p>Status: {{ isActive() ? "Active" : "Inactive" }}</p>
    </div>
  `,
})
export class ChildComponent {
  title = input.required<string>();
  count = input(0);
  isActive = input(false);
}
