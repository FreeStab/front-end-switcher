import { Component } from "@angular/core";

@Component({
  selector: "app-component",
  template: `
    <div>{{ count }}</div>
    <div>{{ doubleCount }}</div>
  `,
})
export class AppComponent {
  count = 0;

  get doubleCount() {
    return this.count * 2;
  }
}
