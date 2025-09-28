import { Component, signal } from "@angular/core";

@Component({
  selector: "app-component",
  template: `
    <div>{{ count() }}</div>
    <button (click)="increment()">+</button>
  `,
  standalone: true,
})
export class AppComponent {
  count = signal(0);

  increment() {
    this.count.update((value) => value + 1);
  }
}
