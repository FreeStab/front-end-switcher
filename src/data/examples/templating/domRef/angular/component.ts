import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-dom-ref",
  template: `
    <div>
      <input #inputRef type="text" placeholder="Focus me!" />
      <button (click)="focusInput()">Focus Input</button>
      <p>Input value: {{ inputValue }}</p>
    </div>
  `,
})
export class DomRefComponent {
  @ViewChild("inputRef", { static: true }) inputRef!: ElementRef;
  inputValue = "";

  focusInput() {
    this.inputRef.nativeElement.focus();
    this.inputValue = this.inputRef.nativeElement.value;
  }
}
