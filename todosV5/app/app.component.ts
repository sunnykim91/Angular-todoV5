import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-todo-container></app-todo-container>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'todoV5';
}
