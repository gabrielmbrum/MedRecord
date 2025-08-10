import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
//import { FeaturesComponent } from './components/features/features.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CtaComponent } from './components/cta/cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    HeroComponent,
//    FeaturesComponent,
    TestimonialsComponent,
    CtaComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // Lógica específica da página home pode ser adicionada aqui
  // Ex: Dados para gráficos, últimas notícias, etc.
}