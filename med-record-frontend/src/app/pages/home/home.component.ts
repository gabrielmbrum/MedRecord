import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="home-container">
      <header class="header">
        <h1>Bem-vindo ao MedRecord+</h1>
        <p>Seu sistema de gestão de prontuários médicos</p>
      </header>

      <section class="features">
        <div class="feature-card">
          <h2>Pacientes</h2>
          <p>Gerencie cadastros de pacientes</p>
          <a routerLink="/pacientes" class="btn">Acessar</a>
        </div>

        <div class="feature-card">
          <h2>Médicos</h2>
          <p>Controle sua equipe médica</p>
          <a routerLink="/medicos" class="btn">Acessar</a>
        </div>

        <div class="feature-card">
          <h2>Consultas</h2>
          <p>Agende e acompanhe consultas</p>
          <a routerLink="/consultas" class="btn">Acessar</a>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home-container {
      max-width: 1200px;
      margin: 2rem auto;
      padding: 0 1rem;
    }

    .header {
      text-align: center;
      margin-bottom: 3rem;
    }
    .header h1 {
      color: #2c3e50;
      font-size: 2.5rem;
    }
    .header p {
      color: #7f8c8d;
      font-size: 1.2rem;
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .feature-card {
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      padding: 2rem;
      transition: transform 0.3s ease;
    }
    .feature-card:hover {
      transform: translateY(-5px);
    }
    .feature-card h2 {
      color: #3498db;
      margin-top: 0;
    }

    .btn {
      display: inline-block;
      background: #3498db;
      color: white;
      padding: 0.8rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      margin-top: 1rem;
      font-weight: 500;
      transition: background 0.3s;
    }
    .btn:hover {
      background: #2980b9;
    }
  `]
})
export class HomeComponent {}
