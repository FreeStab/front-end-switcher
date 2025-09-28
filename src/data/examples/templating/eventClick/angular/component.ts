import { Component } from "@angular/core";

@Component({
  selector: "app-click",
  template: `
    <div>
      <button (click)="handleClick()">Click me!</button>
      <p>Clicked {{ count }} times</p>
    </div>
  `,
})
export class ClickComponent {
  count = 0;

  handleClick() {
    this.count++;
    console.log("Button clicked!");
  }
}
