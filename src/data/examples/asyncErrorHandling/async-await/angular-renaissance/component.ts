import { Component, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

@Component({
  selector: "app-async",
  template: `
    <button (click)="fetchData()" [disabled]="loading()">
      {{ loading() ? "Loading..." : "Fetch Data" }}
    </button>
    <div *ngIf="error()" class="error">{{ error() }}</div>
    <div *ngIf="data()">{{ data().message }}</div>
  `,
  standalone: true,
})
export class AsyncComponent {
  data = signal<any>(null);
  loading = signal(false);
  error = signal<string | null>(null);

  constructor(private http: HttpClient) {}

  async fetchData() {
    this.loading.set(true);
    this.error.set(null);

    try {
      const result = await firstValueFrom(this.http.get("/api/data"));
      this.data.set(result);
    } catch (err: any) {
      this.error.set(err.message);
    } finally {
      this.loading.set(false);
    }
  }
}
