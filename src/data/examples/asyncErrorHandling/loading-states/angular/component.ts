import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, delay, map, startWith } from "rxjs/operators";

interface LoadingState<T> {
  loading: boolean;
  data: T | null;
  error: string | null;
}

@Component({
  selector: "app-loading",
  template: `
    <div *ngIf="state$ | async as state">
      <!-- Loading Skeleton -->
      <div *ngIf="state.loading" class="skeleton-container">
        <div *ngFor="let item of [1, 2, 3]" class="skeleton-item">
          <div class="skeleton-avatar"></div>
          <div class="skeleton-content">
            <div class="skeleton-line skeleton-line-title"></div>
            <div class="skeleton-line skeleton-line-text"></div>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div *ngIf="state.error" class="error-state">
        <p>{{ state.error }}</p>
        <button (click)="retry()">Retry</button>
      </div>

      <!-- Content -->
      <div *ngIf="state.data" class="content">
        <div *ngFor="let item of state.data" class="item">
          <img [src]="item.avatar" class="avatar" alt="Avatar" />
          <div class="content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
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
})
export class LoadingComponent implements OnInit {
  state$: Observable<LoadingState<any[]>>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.state$ = this.http.get<any[]>("/api/items").pipe(
      delay(2000), // Simulate network delay
      map((data) => ({ loading: false, data, error: null })),
      catchError((error) =>
        of({ loading: false, data: null, error: error.message })
      ),
      startWith({ loading: true, data: null, error: null })
    );
  }

  retry() {
    this.loadData();
  }
}
