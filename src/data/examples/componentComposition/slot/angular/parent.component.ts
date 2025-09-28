import { Component } from "@angular/core";

@Component({
  selector: "app-parent",
  template: `
    <div>
      <app-card>
        <h2>Card Title</h2>
        <p>This is the card content</p>
        <button>Action Button</button>
      </app-card>
    </div>
  `,
})
export class ParentComponent {}
