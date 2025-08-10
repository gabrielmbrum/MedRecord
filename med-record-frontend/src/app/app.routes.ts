import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { 
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/auth/login/login.component').then(m => m.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./pages/auth/register/').then(m => m.RegisterComponent)
      }
    ]
  },
  {
    path: 'medico/dashboard',
    loadComponent: () => import('./modules/medico/pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [authGuard],
    data: { role: 'medico' }
  },
  {
    path: 'paciente/dashboard',
    loadComponent: () => import('./modules/paciente/pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [authGuard],
    data: { role: 'paciente' }
  },
  { path: '**', redirectTo: '' }
];