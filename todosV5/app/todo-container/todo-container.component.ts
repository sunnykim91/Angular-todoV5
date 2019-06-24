import { Component  } from '@angular/core';
import { Todos } from '../todos.interface';
import { NavItem } from '../nav-item.type';
import { log } from 'util';


@Component({
  selector: 'app-todo-container',
  template: `
  <div class="container">
    <h1 class="title">Todos</h1>
    <div class="ver">5.0</div>
    <app-todo-form (add)="addTodo($event)"></app-todo-form>
    <app-todo-nav [navItems]="navItems" [navState]="navState" (navChange)="navState = $event"></app-todo-nav>
    <app-todo-list [todos]="todos" [navState]="navState" (remove)="removeTodo($event)" (toggle)="toggleTodo($event)" ></app-todo-list>
    <app-todo-footer [todos]="todos" (toggleAll)="toggleAllTodo()" (clearCom)="clearCompleted()"></app-todo-footer>
  </div>
  `,
  styles: [`
  .container {
    max-width: 750px;
    min-width: 450px;
    margin: 0 auto;
    padding: 15px;
  }
  
  .title {
    /* margin: 10px 0; */
    font-size: 4.5em;
    font-weight: 100;
    text-align: center;
    color: #23b7e5;
  }
  
  .ver {
    font-weight: 100;
    text-align: center;
    color: #23b7e5;
    margin-bottom: 30px;
  }
  `]
})
export class TodoContainerComponent {
  todos: Todos[] = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
  ];
  navItems: NavItem[] = ['All', 'Active', 'Completed'];
  navState: NavItem = 'All';
  newtodo?: Todos;
  toggleflag: boolean = false;


  // getActiveClass(elem) {
  //   if (elem.nodeName !== 'LI') return;

  //   [...elem.parentNode.children].forEach(item => {
  //     if (item === elem) item.classList.add('active');
  //     else item.classList.remove('active');
  //   });
  //   this.navState = elem.id;
  // }

  // get _todos(): Todos[] 
  // get _todos(): Todos[] {
  //   return this.todos.filter(todo => {
  //     if (this.currentstate === 'active') return todo.completed;
  //     if (this.currentstate === 'completed') return !todo.completed;
  //     return true;
  //   });
  // } 

  addTodo(content: string) {
    this.newtodo = { id: this.generateId(), content, completed: false };
    this.todos = [this.newtodo, ...this.todos];
  }

  generateId() {
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  toggleTodo(id: number) {
    this.todos = this.todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }

  toggleAllTodo() {
    if (this.toggleflag) {
      this.toggleflag = false;
      return this.todos.map((todo) => todo.completed = false);
    } else
      this.toggleflag = true;
    return this.todos.map((todo) => todo.completed = true);
  }

  clearCompleted() {
    this.todos = this.todos.filter((todo) => todo.completed === false);
  }

}
