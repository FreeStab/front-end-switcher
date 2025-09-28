import { Component, signal } from "@angular/core";

@Component({
  selector: "app-component",
  template: "<div>{{ count() }}</div>",
  standalone: true,
})
export class AppComponent {
  count = signal(0);
}
