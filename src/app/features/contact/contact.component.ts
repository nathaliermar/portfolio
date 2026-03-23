import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly email    = 'nathalieribmartines@email.com';
  readonly github   = 'https://github.com/nathaliermar';
  readonly linkedin = 'https://www.linkedin.com/in/nathalie-martines-48680b240/';
}