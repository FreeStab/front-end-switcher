import { Component } from "@angular/core";

@Component({
  selector: "app-parent",
  template: `
    <div>
      <app-child [title]="pageTitle" [count]="counter" [isActive]="isActive">
      </app-child>
    </div>
  `,
})
export class ParentComponent {
  pageTitle = "Hello World";
  counter = 42;
  isActive = true;
}
