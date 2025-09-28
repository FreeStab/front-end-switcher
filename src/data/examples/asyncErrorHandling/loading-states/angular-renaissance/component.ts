import { Component, OnInit, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

interface Item {
  id: string;
  avatar: string;
  title: string;
  description: string;
}

@Component({
  selector: "app-loading",
  template: `
    <!-- Loading Skeleton -->
    @if (loading()) {
    <div class="skeleton-container">
      @for (item of [1,2,3]; track $index) {
      <div class="skeleton-item">
        <div class="skeleton-avatar"></div>
        <div class="skeleton-content">
          <div class="skeleton-line skeleton-line-title"></div>
          <div class="skeleton-line skeleton-line-text"></div>
        </div>
      </div>
      }
    </div>
    }

    <!-- Error State -->
    @if (error()) {
    <div class="error-state">
      <p>{{ error() }}</p>
      <button (click)="retry()">Retry</button>
    </div>
    }

    <!-- Content -->
    @if (data(); as items) {
    <div class="content">
      @for (item of items; track item.id) {
      <div class="item">
        <img [src]="item.avatar" class="avatar" alt="Avatar" />
        <div class="content">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
      }
    </div>
    }
  `,
  styles: [
    `
      .skeleton-container {
        padding: 20px;
      }

      .skeleton-item {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        padding: 16px;
        border-radius: 8px;
        background: #f5f5f5;
      }

      .skeleton-avatar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: linear-gradient(
          90deg,
          #e2e2e2 25%,
          #f0f0f0 50%,
          #e2e2e2 75%
        );
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
        margin-right: 16px;
      }

      .skeleton-content {
        flex: 1;
      }

      .skeleton-line {
        height: 16px;
        background: linear-gradient(
          90deg,
          #e2e2e2 25%,
          #f0f0f0 50%,
          #e2e2e2 75%
        );
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
        border-radius: 4px;
        margin-bottom: 8px;
      }

      .skeleton-line-title {
        height: 20px;
        width: 60%;
      }

      .skeleton-line-text {
        width: 80%;
      }

      @keyframes loading {
        0% {
          background-position: 200% 0;
        }
        100% {
          background-position: -200% 0;
        }
      }

      .content .item {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        padding: 16px;
        border-radius: 8px;
        border: 1px solid #e0e0e0;
      }

      .avatar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin-right: 16px;
      }

      .error-state {
        text-align: center;
        padding: 40px;
        color: #cc0000;
      }

      .error-state button {
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
export class LoadingComponent implements OnInit {
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
      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const result = await firstValueFrom(this.http.get<Item[]>("/api/items"));
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
