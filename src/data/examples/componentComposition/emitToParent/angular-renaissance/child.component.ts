import { Component, output } from "@angular/core";

@Component({
  selector: "app-child",
  template: `
    <div>
      <button (click)="onIncrement()">+</button>
      <button (click)="onDecrement()">-</button>
    </div>
  `,
})
export class ChildComponent {
  increment = output<void>();
  decrement = output<void>();

  onIncrement() {
    this.increment.emit();
  }

  onDecrement() {
    this.decrement.emit();
  }
}
