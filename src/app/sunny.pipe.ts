import { Pipe, PipeTransform } from '@angular/core';
import { Todos } from './todos.interface';

@Pipe({
  name: 'sunny',
})
export class SunnyPipe implements PipeTransform {

  transform(todos: Todos[], navState: string) {

    return todos.filter(todo => {
      if (navState === 'Active') return todo.completed;
      if (navState === 'Completed') return !todo.completed;
      return true;
    });
    // // return todos.map(todo=>todo.completed);
    
    // todos = todos.filter(todo => {
    //   if (currentstate === 'active') return todo.completed;
    //   if (currentstate === 'completed') return !todo.completed;
    //   return true;
    // });;

    // return todos.map(todo => todo);
  }

}
