import { Component } from "@angular/core";

@Component({
  selector: "app-component",
  template: `
    <div>{{ count }}</div>
    <button (click)="increment()">+</button>
  `,
})
export class AppComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
