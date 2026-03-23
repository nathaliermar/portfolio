import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly bio = `
      3+ years of experience in Java and Spring Boot,
focused on microservices, hexagonal architecture, and high-availability systems.
      Currently seeking international remote opportunities.
  `;
}