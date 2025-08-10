import { Component } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
    <div class="login-container">
      <h2>Login</h2>
      <form (ngSubmit)="onSubmit()">
        <input type="email" [(ngModel)]="email" name="email" placeholder="Email" required>
        <input type="password" [(ngModel)]="password" name="password" placeholder="Senha" required>
        
        <div class="role-selector">
          <label>
            <input type="radio" [(ngModel)]="role" name="role" value="medico" required> Médico
          </label>
          <label>
            <input type="radio" [(ngModel)]="role" name="role" value="paciente"> Paciente
          </label>
        </div>
        
        <button type="submit">Entrar</button>
      </form>
      <p>Não tem conta? <a routerLink="/auth/register">Cadastre-se</a></p>
    </div>
  `,
  styles: [`
    .login-container {
      max-width: 400px;
      margin: 2rem auto;
      padding: 2rem;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
    .role-selector {
      margin: 1rem 0;
      display: flex;
      gap: 1rem;
    }
  `]
})
export class LoginComponent {
  email = '';
  password = '';
  role: 'medico' | 'paciente' = 'paciente';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.email, this.password, this.role);
  }
}