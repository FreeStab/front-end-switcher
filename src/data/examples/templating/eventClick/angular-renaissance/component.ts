import { Component, signal } from "@angular/core";

@Component({
  selector: "app-click",
  template: `
    <div>
      <button (click)="handleClick()">Click me!</button>
      <p>Clicked {{ count() }} times</p>
    </div>
  `,
  standalone: true,
})
export class ClickComponent {
  count = signal(0);

  handleClick() {
    this.count.update((c) => c + 1);
    console.log("Button clicked!");
  }
}
