import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, startWith } from "rxjs/operators";

interface AsyncState<T> {
  loading: boolean;
  data: T | null;
  error: Error | null;
}

@Component({
  selector: "app-suspense",
  template: `
    <div *ngIf="state$ | async as state">
      <!-- Loading State -->
      <div *ngIf="state.loading" class="loading-spinner">
        <div class="spinner"></div>
        <p>Loading data...</p>
      </div>

      <!-- Error State -->
      <div *ngIf="state.error" class="error-message">
        <p>Error: {{ state.error.message }}</p>
        <button (click)="retry()">Retry</button>
      </div>

      <!-- Success State -->
      <div *ngIf="state.data" class="data-list">
        <div *ngFor="let item of state.data" class="item">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
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
})
export class SuspenseComponent implements OnInit {
  state$: Observable<AsyncState<any[]>>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.state$ = this.http.get<any[]>("/api/data").pipe(
      map((data) => ({ loading: false, data, error: null })),
      catchError((error) => of({ loading: false, data: null, error })),
      startWith({ loading: true, data: null, error: null })
    );
  }

  retry() {
    this.loadData();
  }
}
