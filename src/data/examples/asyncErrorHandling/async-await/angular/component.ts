import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-async",
  template: `
    <button (click)="fetchData()" [disabled]="loading">
      {{ loading ? "Loading..." : "Fetch Data" }}
    </button>
    <div *ngIf="error" class="error">{{ error }}</div>
    <div *ngIf="data">{{ data.message }}</div>
  `,
})
export class AsyncComponent {
  data: any = null;
  loading = false;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  async fetchData() {
    this.loading = true;
    this.error = null;

    try {
      this.data = await this.http.get("/api/data").toPromise();
    } catch (err: any) {
      this.error = err.message;
    } finally {
      this.loading = false;
    }
  }
}
