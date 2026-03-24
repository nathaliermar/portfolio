import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

export interface Video {
  readonly icon:        string;
  readonly title:       string;
  readonly description: string;
  readonly tag:         string;
  readonly url?:        string;
}

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [NgFor, MatCardModule, MatChipsModule, MatIconModule],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent {
  readonly videos: Video[] = [
    {
      icon: 'architecture',
      title: 'Hexagonal Architecture in Spring Boot',
      description: 'How I structure real enterprise microservices with clean separation of concerns.',
      tag: 'architecture'
    },
    {
      icon: 'lock',
      title: 'OAuth 2.0 + Keycloak from Scratch',
      description: 'Setting up identity management end-to-end in a Java microservices project.',
      tag: 'security'
    },
    {
      icon: 'terminal',
      title: 'Docker + Kubernetes for Java Devs',
      description: 'Containerizing Spring Boot apps and deploying to a Kubernetes cluster.',
      tag: 'devops'
    },
    {
      icon: 'storage',
      title: 'JPA, Hibernate & MapStruct Deep Dive',
      description: 'Mapping entities, optimizing queries, and handling DTO conversions like a pro.',
      tag: 'database'
    }
  ];
}