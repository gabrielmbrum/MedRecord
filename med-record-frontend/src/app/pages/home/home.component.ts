import { Component } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="home-container">
      <h1>Bem-vindo ao MedRecord</h1>
      
      <div *ngIf="authService.getCurrentUser(); else unauthenticated">
        <p>Você está logado como: {{ authService.getCurrentUser()?.role }}</p>
        <a routerLink="/{{ authService.getCurrentUser()?.role }}/dashboard">Ir para dashboard</a>
        <button (click)="authService.logout()">Logout</button>
      </div>
      
      <ng-template #unauthenticated>
        <a routerLink="/auth/login" class="btn">Login</a>
        <a routerLink="/auth/register" class="btn">Cadastre-se</a>
      </ng-template>
    </div>
  `,
  styles: [`
    .home-container {
      text-align: center;
      padding: 2rem;
    }
    .btn {
      margin: 0 1rem;
    }
  `]
})
export class HomeComponent {
  constructor(public authService: AuthService) {}
}