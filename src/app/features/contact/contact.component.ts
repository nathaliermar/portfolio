import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
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
  imports: [NgFor, NgIf, MatButtonModule, MatIconModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly email = 'nathalieribmartines@gmail.com';
  emailCopied = false;

  readonly links: ContactLink[] = [
    { icon: 'business_center', label: 'LinkedIn', href: 'https://www.linkedin.com/in/nathalie-martines-48680b240/' },
    { icon: 'terminal',        label: 'GitHub',   href: 'https://github.com/nathaliermar' },
    { icon: 'description',     label: 'Resume',   href: 'curriculum-en-us.pdf' },
  ];

  copyEmail(): void {
    navigator.clipboard.writeText(this.email).then(() => {
      this.emailCopied = true;
      setTimeout(() => (this.emailCopied = false), 2500);
    });
  }
}