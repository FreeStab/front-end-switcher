import { Component, OnDestroy } from "@angular/core";

@Component({
  selector: "app-component",
  template: "<div>Component will cleanup on unmount</div>",
  standalone: true,
})
export class AppComponent implements OnDestroy {
  ngOnDestroy() {
    console.log("Component will unmount");
    // Cleanup logic here
  }
}
