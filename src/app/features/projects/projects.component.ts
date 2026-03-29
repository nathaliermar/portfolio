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
      title: 'Medical Request Service',
      description: 'Microservice for healthcare procedure authorization, built with Hexagonal Architecture, JWT security, and event-driven status tracking via RabbitMQ.',
      stack: ['Java 21', 'Spring Boot 3', 'Hexagonal Architecture', 'Spring Data JPA', 'PostgreSQL', 'Spring Security', 'JWT', 'RabbitMQ', 'MapStruct', 'OpenAPI 3.0', 'JUnit 5', 'Mockito', 'JaCoCo', 'Docker', 'GitHub Actions'],
      repoUrl: 'https://github.com/nathaliermar/medical-request-service'
    },
    {
      title: 'Document Storage Service',
      description: 'Microservice for document upload and storage using AWS S3, RDS PostgreSQL, and ECS Fargate. Integrated with medical-request-service.',
      stack: ['Java 21', 'Spring Boot 3', 'Layered Architecture', 'Strategy Pattern', 'AWS S3 + Presigned URL', 'PostgreSQL (RDS)', 'Spring Data JPA / Hibernate', 'ECS Fargate · ECR · IAM Task Role', 'SpringDoc OpenAPI (Swagger UI)', 'Maven 3.0'],
      repoUrl: 'https://github.com/nathaliermar/document-storage-service'
    },
    {
      title: 'Portfolio',
      description: 'This portfolio. Built from scratch with Angular 17+ Standalone Components, SCSS design tokens and deployed on Vercel.',
      stack: ['Angular', 'TypeScript', 'SCSS'],
      repoUrl: 'https://github.com/nathaliermar/portfolio',
      demoUrl: 'https://nathaliemartines.vercel.app/'
    },
    {
      title: 'Parking Control API',
      description: 'REST API for condominium parking management. Built with Spring MVC, Spring Data JPA and Spring Validation — full CRUD with business rule validation per parking spot.',
      stack: ['Java', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL'],
      repoUrl: 'https://github.com/nathaliermar/parking-control-api'
    },
        {
      title: 'Spring Patterns — Client Manager',
      description: 'Client management API applying Spring Framework design patterns. Focused on clean service layer design, dependency injection and separation of concerns.',
      stack: ['Java', 'Spring Boot', 'Design Patterns', 'REST'],
      repoUrl: 'https://github.com/nathaliermar/spring-patterns-client-manager'
    }
  ];
}