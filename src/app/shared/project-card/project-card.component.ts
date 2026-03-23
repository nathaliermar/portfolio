import { Component, Input }  from '@angular/core';
import { NgFor, NgIf }       from '@angular/common';
import { Project }           from '../models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
}