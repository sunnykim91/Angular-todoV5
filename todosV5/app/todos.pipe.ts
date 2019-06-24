import { Pipe, PipeTransform } from '@angular/core';
import { Todos } from './todos.interface';
import { NavItem } from './nav-item.type';

@Pipe({
  name: 'todos'
})
export class TodosPipe implements PipeTransform {

  transform(todos: Todos[], navState: NavItem) {

    return todos.filter(todo => {
      if (navState === 'Active') return !todo.completed;
      if (navState === 'Completed') return todo.completed;
      return true;
    });
  }
}
