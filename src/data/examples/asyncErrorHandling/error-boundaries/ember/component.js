import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class ErrorBoundaryComponent extends Component {
  @tracked hasError = false;
  @tracked errorMessage = "";

  constructor() {
    super(...arguments);

    // Set up global error handlers
    if (typeof window !== "undefined") {
      window.addEventListener("error", this.handleError.bind(this));
      window.addEventListener(
        "unhandledrejection",
        this.handlePromiseRejection.bind(this)
      );
    }
  }

  willDestroy() {
    super.willDestroy();

    if (typeof window !== "undefined") {
      window.removeEventListener("error", this.handleError);
      window.removeEventListener(
        "unhandledrejection",
        this.handlePromiseRejection
      );
    }
  }

  @action
  handleError(event) {
    console.error("Error occurred:", event.error);
    this.hasError = true;
    this.errorMessage = event.error?.message || "An unknown error occurred";
    // Send to error reporting service
  }

  @action
  handlePromiseRejection(event) {
    console.error("Promise rejection:", event.reason);
    this.hasError = true;
    this.errorMessage = event.reason?.message || "Promise was rejected";
    // Send to error reporting service
  }

  @action
  retry() {
    this.hasError = false;
    this.errorMessage = "";
  }
}
