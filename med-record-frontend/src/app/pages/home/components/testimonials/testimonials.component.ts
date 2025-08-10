import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials = [
    {
      content: '"O MedRecord+ revolucionou meu consultório. Agora consigo acessar os prontuários de qualquer lugar!"',
      author: 'Dr. Carlos Silva',
      role: 'Cardiologista',
      avatar: '👨‍⚕️'
    },
    {
      content: '"Como paciente, adoro poder acessar minhas receitas e resultados de exames a qualquer momento."',
      author: 'Ana Oliveira',
      role: 'Paciente',
      avatar: '👩'
    }
  ];
}