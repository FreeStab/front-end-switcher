import { Component } from "@angular/core";

@Component({
  selector: "app-conditional",
  template: `
    <div>
      <button (click)="toggle()">Toggle</button>

      <p *ngIf="isVisible; else hiddenTemplate">This is visible!</p>
      <ng-template #hiddenTemplate>
        <p>This is hidden!</p>
      </ng-template>

      <div *ngIf="isVisible">
        <h3>Conditional Content</h3>
        <p *ngIf="count > 5">Count is greater than 5: {{ count }}</p>
        <p *ngIf="count > 0 && count <= 5">
          Count is between 1 and 5: {{ count }}
        </p>
        <p *ngIf="count <= 0">Count is 0 or negative</p>
      </div>
    </div>
  `,
})
export class ConditionalComponent {
  isVisible = true;
  count = 3;

  toggle() {
    this.isVisible = !this.isVisible;
    this.count++;
  }
}
