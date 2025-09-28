import { Component, signal } from "@angular/core";

@Component({
  selector: "app-component",
  template: `
    <ul>
      <li *ngFor="let item of items(); trackBy: trackByFn">
        {{ item.name }}
      </li>
    </ul>
  `,
})
export class AppComponent {
  items = signal([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
  ]);

  trackByFn(index: number, item: any) {
    return item.id;
  }
}
