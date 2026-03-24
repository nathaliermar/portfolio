import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { Project } from '../../shared/models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  readonly projects: Project[] = [
    {
      title: 'Medical Request Service — Healthcare Authorization Platform',
      description: 'Production-ready Spring Boot 3 microservice for healthcare procedure authorization, built with Hexagonal Architecture, JWT security, and event-driven status tracking via RabbitMQ.',
      stack: ['Java 21', 'Spring Boot 3', 'Hexagonal Architecture', 'Spring Data JPA', 'PostgreSQL', 'Spring Security', 'JWT', 'RabbitMQ', 'MapStruct', 'OpenAPI 3.0', 'JUnit 5', 'Mockito', 'JaCoCo', 'Docker', 'GitHub Actions'],
      repoUrl: 'https://github.com/nathaliermar/medical-request-platform'
    },
    {
      title: 'Portfolio',
      description: 'This portfolio. Built from scratch with Angular 17+ Standalone Components, SCSS design tokens and deployed on Vercel.',
      stack: ['Angular', 'TypeScript', 'SCSS'],
      repoUrl: 'https://github.com/nathaliermar/portfolio',
      demoUrl: 'https://nathaliemartines.vercel.app/'
    },
    {
      title: 'Spring Patterns — Client Manager',
      description: 'Client management API applying Spring Framework design patterns. Focused on clean service layer design, dependency injection and separation of concerns.',
      stack: ['Java', 'Spring Boot', 'Design Patterns', 'REST'],
      repoUrl: 'https://github.com/nathaliermar/spring-patterns-client-manager'
    },
    {
      title: 'Parking Control API',
      description: 'REST API for condominium parking management. Built with Spring MVC, Spring Data JPA and Spring Validation — full CRUD with business rule validation per parking spot.',
      stack: ['Java', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL'],
      repoUrl: 'https://github.com/nathaliermar/parking-control-api'
    }
  ];
}