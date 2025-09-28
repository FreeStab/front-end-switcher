import { Component, Input } from "@angular/core";

@Component({
  selector: "app-child",
  template: `
    <div>
      <h1>{{ title }}</h1>
      <p>Count: {{ count }}</p>
      <p>Status: {{ isActive ? "Active" : "Inactive" }}</p>
    </div>
  `,
})
export class ChildComponent {
  @Input() title!: string;
  @Input() count: number = 0;
  @Input() isActive: boolean = false;
}
