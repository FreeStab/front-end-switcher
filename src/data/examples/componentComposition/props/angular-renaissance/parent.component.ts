import { Component, signal } from "@angular/core";

@Component({
  selector: "app-parent",
  template: `
    <div>
      <app-child
        [title]="pageTitle()"
        [count]="counter()"
        [isActive]="isActive()"
      >
      </app-child>
    </div>
  `,
})
export class ParentComponent {
  pageTitle = signal("Hello World");
  counter = signal(42);
  isActive = signal(true);
}
