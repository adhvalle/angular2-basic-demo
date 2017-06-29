import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      {{ title }}
    </div>
  `,
  // Instead we could use templateUrl
  // to create separetes views
  // templateUrl: './app.component.html'
})

export class AppComponent {
  title: string;
  constructor() {
    this.title  = 'Angular 2 Demo';
  }
}
