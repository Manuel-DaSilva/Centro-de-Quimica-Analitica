import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a [routerLink]="['/sitio']">Sitio</a> - <a [routerLink]="['/admin']">Admin</a>

    <router-outlet></router-outlet>
  `,
  styleUrls: []
})
export class AppComponent {
  title = 'CQA';
}
