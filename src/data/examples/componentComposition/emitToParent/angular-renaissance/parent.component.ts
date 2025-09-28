import { Component, signal } from "@angular/core";

@Component({
  selector: "app-parent",
  template: `
    <div>
      <p>Count: {{ count() }}</p>
      <app-child
        (increment)="handleIncrement()"
        (decrement)="handleDecrement()"
      >
      </app-child>
    </div>
  `,
})
export class ParentComponent {
  count = signal(0);

  handleIncrement() {
    this.count.update((value) => value + 1);
  }

  handleDecrement() {
    this.count.update((value) => value - 1);
  }
}
