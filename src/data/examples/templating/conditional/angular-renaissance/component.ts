import { Component, signal } from "@angular/core";

@Component({
  selector: "app-conditional",
  template: `
    <div>
      <button (click)="toggle()">Toggle</button>

      @if (isVisible()) {
      <p>This is visible!</p>
      } @else {
      <p>This is hidden!</p>
      } @if (isVisible()) {
      <div>
        <h3>Conditional Content</h3>
        @if (count() > 5) {
        <p>Count is greater than 5: {{ count() }}</p>
        } @else if (count() > 0) {
        <p>Count is between 1 and 5: {{ count() }}</p>
        } @else {
        <p>Count is 0 or negative</p>
        }
      </div>
      }
    </div>
  `,
  standalone: true,
})
export class ConditionalComponent {
  isVisible = signal(true);
  count = signal(3);

  toggle() {
    this.isVisible.update((visible) => !visible);
    this.count.update((c) => c + 1);
  }
}
