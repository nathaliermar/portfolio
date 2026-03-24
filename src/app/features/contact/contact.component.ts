import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface ContactLink {
  readonly icon: string;
  readonly label: string;
  readonly href: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgFor, MatButtonModule, MatIconModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly links: ContactLink[] = [
    { icon: 'email', label: 'Email', href: 'mailto:nathalieribmartines@gmail.com' },
    { icon: 'business_center', label: 'LinkedIn', href: 'https://www.linkedin.com/in/nathalie-martines-48680b240/' },
    { icon: 'terminal', label: 'GitHub', href: 'https://github.com/nathaliermar' },
    { icon: 'description', label: 'Resume', href: 'curriculum-en-us.pdf' },
  ];
}