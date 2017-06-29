import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <input
        type="text"
        [ngModel]="name"/>
      <div>{{ name }}</div>
    </div>
  `,
  // Instead we could use templateUrl
  // to create separetes views
  // templateUrl: './app.component.html'
})

export class AppComponent {
  name: string = 'Andres';
  handleBlur(event: any) {
    this.name = event.target.value;
    console.log(event);
  }
}
