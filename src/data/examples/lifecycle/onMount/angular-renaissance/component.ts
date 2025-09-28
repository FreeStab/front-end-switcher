import { Component, OnInit, signal } from "@angular/core";

@Component({
  selector: "app-component",
  template: "<div>{{ message() }}</div>",
  standalone: true,
})
export class AppComponent implements OnInit {
  message = signal("");

  ngOnInit() {
    this.message.set("Component mounted!");
    console.log("Component mounted");
  }
}
