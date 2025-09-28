import { Component, OnInit, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

interface Item {
  id: string;
  title: string;
  description: string;
}

@Component({
  selector: "app-suspense",
  template: `
    <!-- Loading State -->
    @if (loading()) {
    <div class="loading-spinner">
      <div class="spinner"></div>
      <p>Loading data...</p>
    </div>
    }

    <!-- Error State -->
    @if (error()) {
    <div class="error-message">
      <p>Error: {{ error() }}</p>
      <button (click)="retry()">Retry</button>
    </div>
    }

    <!-- Success State -->
    @if (data(); as items) {
    <div class="data-list">
      @for (item of items; track item.id) {
      <div class="item">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
      }
    </div>
    }
  `,
  styles: [
    `
      .loading-spinner {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px;
      }

      .spinner {
        border: 4px solid #f3f3f3;
        border-top: 4px solid #3498db;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      .data-list {
        padding: 20px;
      }

      .item {
        margin-bottom: 16px;
        padding: 16px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
      }

      .item h3 {
        margin: 0 0 8px 0;
        color: #333;
      }

      .item p {
        margin: 0;
        color: #666;
      }

      .error-message {
        text-align: center;
        padding: 40px;
        color: #cc0000;
      }

      .error-message button {
        margin-top: 16px;
        padding: 8px 16px;
        background: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
    `,
  ],
  standalone: true,
})
export class SuspenseComponent implements OnInit {
  data = signal<Item[] | null>(null);
  loading = signal(true);
  error = signal<string | null>(null);

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    this.loading.set(true);
    this.error.set(null);

    try {
      const result = await firstValueFrom(this.http.get<Item[]>("/api/data"));
      this.data.set(result);
    } catch (err: any) {
      this.error.set(err.message);
    } finally {
      this.loading.set(false);
    }
  }

  retry() {
    this.loadData();
  }
}
