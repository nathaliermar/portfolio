import { Component, afterNextRender } from '@angular/core';
import { HeroComponent } from './features/hero/hero.component';
import { AboutComponent } from './features/about/about.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ContactComponent } from './features/contact/contact.component';
import { VideosComponent } from './features/videos/videos.component';
import { NavComponent } from './shared/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, AboutComponent, ProjectsComponent, ContactComponent, VideosComponent, NavComponent],
  template: `
    <app-nav />
    <main>
      <app-hero />
      <app-about />
      <app-projects />
      <app-videos />
      <app-contact />
    </main>
  `
})
export class AppComponent {
  constructor() {
    afterNextRender(() => window.scrollTo(0, 0));
  }
}
