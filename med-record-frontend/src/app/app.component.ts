import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.html', // Mantenha usando o arquivo externo
  styleUrls: ['./app.scss']
})
export class AppComponent {
  currentYear = new Date().getFullYear();
}
