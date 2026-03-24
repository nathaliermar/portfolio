import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatButtonModule, NgFor, MatIconModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  readonly links = [
    { label: 'Projects', anchor: '#projects', icon: 'code' },
    { label: 'Videos', anchor: '#videos', icon: 'video_library' },
    { label: 'Contact', anchor: '#contact', icon: 'mail' },
  ];
}