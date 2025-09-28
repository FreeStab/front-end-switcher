import { Component, EventEmitter, Output } from "@angular/core";

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
  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();

  onIncrement() {
    this.increment.emit();
  }

  onDecrement() {
    this.decrement.emit();
  }
}
