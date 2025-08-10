import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

type UserRole = 'medico' | 'paciente';

interface User {
  email: string;
  role: UserRole;
  nome: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private router: Router) {}

  login(email: string, password: string, role: UserRole): void {
    // Simulação - substitua por chamada HTTP real ao seu backend Java
    const user: User = {
      email,
      role,
      nome: role === 'medico' ? 'Dr. Silva' : 'João Paciente'
    };
    this.currentUserSubject.next(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    // Redireciona conforme o tipo de usuário
    this.router.navigate([`${role}/dashboard`]);
  }

  logout(): void {
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }
}