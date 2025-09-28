import { Component } from "@angular/core";

@Component({
  selector: "app-component",
  template: `
    <div class="container">
      <p [class.active]="isActive" [ngStyle]="styles">Styled content</p>
    </div>
  `,
  styles: [
    `
      .container {
        padding: 20px;
      }
      .active {
        font-weight: bold;
      }
    `,
  ],
})
export class AppComponent {
  isActive = true;
  styles = {
    color: "blue",
    "font-size": "16px",
  };
}
