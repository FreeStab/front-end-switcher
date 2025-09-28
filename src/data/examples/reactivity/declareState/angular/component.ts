import { Component } from "@angular/core";

@Component({
  selector: "app-component",
  template: "<div>{{ count }}</div>",
})
export class AppComponent {
  count = 0;
}
