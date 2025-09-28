import { Injectable, ErrorHandler, Component, signal } from "@angular/core";

// Global Error Handler
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.error("Global error:", error);
    // Send to error reporting service
  }
}

// Error Boundary Service with Signals
@Injectable({ providedIn: "root" })
export class ErrorBoundaryService {
  private errorSignal = signal<string | null>(null);

  get error() {
    return this.errorSignal.asReadonly();
  }

  handleError(error: Error) {
    this.errorSignal.set(error.message);
  }

  clearError() {
    this.errorSignal.set(null);
  }
}

// Error Boundary Component
@Component({
  selector: "app-error-boundary",
  template: `
    @if (errorService.error(); as error) {
    <div class="error-boundary">
      <h2>Something went wrong</h2>
      <p>{{ error }}</p>
      <button (click)="retry()">Try Again</button>
    </div>
    } @else {
    <ng-content></ng-content>
    }
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
  standalone: true,
})
export class ErrorBoundaryComponent {
  constructor(public errorService: ErrorBoundaryService) {}

  retry() {
    this.errorService.clearError();
  }
}
