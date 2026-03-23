import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  readonly name    = 'Nathalie Martines';
  readonly role    = 'Backend Engineer';
  readonly summary = 'Java · Spring Boot · Microservices · AI Agents · Angular';
  readonly github  = 'https://github.com/nathaliermar';
  readonly linkedin = 'https://www.linkedin.com/in/nathalie-martines-48680b240/';
}