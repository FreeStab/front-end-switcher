import { Component, ElementRef, ViewChild, signal } from "@angular/core";

@Component({
  selector: "app-dom-ref",
  template: `
    <div>
      <input #inputRef type="text" placeholder="Focus me!" />
      <button (click)="focusInput()">Focus Input</button>
      <p>Input value: {{ inputValue() }}</p>
    </div>
  `,
  standalone: true,
})
export class DomRefComponent {
  @ViewChild("inputRef", { static: true }) inputRef!: ElementRef;
  inputValue = signal("");

  focusInput() {
    this.inputRef.nativeElement.focus();
    this.inputValue.set(this.inputRef.nativeElement.value);
  }
}
