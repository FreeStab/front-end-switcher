import { Injectable, ErrorHandler, Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";

// Global Error Handler
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.error("Global error:", error);
    // Send to error reporting service
  }
}

// Error Boundary Service
@Injectable({ providedIn: "root" })
export class ErrorBoundaryService {
  private errorSubject = new BehaviorSubject<string | null>(null);
  error$ = this.errorSubject.asObservable();

  handleError(error: Error) {
    this.errorSubject.next(error.message);
  }

  clearError() {
    this.errorSubject.next(null);
  }
}

// Error Boundary Component
@Component({
  selector: "app-error-boundary",
  template: `
    <div
      *ngIf="errorService.error$ | async as error; else content"
      class="error-boundary"
    >
      <h2>Something went wrong</h2>
      <p>{{ error }}</p>
      <button (click)="retry()">Try Again</button>
    </div>
    <ng-template #content>
      <ng-content></ng-content>
    </ng-template>
  `,
  styles: [
    `
      .error-boundary {
        padding: 20px;
        border: 2px solid #ff4444;
        border-radius: 8px;
        background-color: #ffe6e6;
        color: #cc0000;
        text-align: center;
      }
    `,
  ],
})
export class ErrorBoundaryComponent {
  constructor(public errorService: ErrorBoundaryService) {}

  retry() {
    this.errorService.clearError();
  }
}
