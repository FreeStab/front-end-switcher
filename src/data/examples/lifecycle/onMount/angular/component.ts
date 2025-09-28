import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-component",
  template: "<div>{{ message }}</div>",
})
export class AppComponent implements OnInit {
  message = "";

  ngOnInit() {
    this.message = "Component mounted!";
    console.log("Component mounted");
  }
}
