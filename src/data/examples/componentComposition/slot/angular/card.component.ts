import { Component } from "@angular/core";

@Component({
  selector: "app-card",
  template: `
    <div class="card">
      <div class="card-body">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      .card {
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 16px;
      }
    `,
  ],
})
export class CardComponent {}
