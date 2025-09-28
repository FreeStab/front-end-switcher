import { Component, signal, computed } from "@angular/core";

@Component({
  selector: "app-component",
  template: `
    <div>{{ count() }}</div>
    <div>{{ doubleCount() }}</div>
  `,
  standalone: true,
})
export class AppComponent {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);
}
