import { Component } from '@angular/core';
import { HeroComponent }     from './features/hero/hero.component';
import { AboutComponent }    from './features/about/about.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ContactComponent }  from './features/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, AboutComponent, ProjectsComponent, ContactComponent],
  template: `
    <main>
      <app-hero />
      <app-about />
      <app-projects />
      <app-contact />
    </main>
  `
})
export class AppComponent {}