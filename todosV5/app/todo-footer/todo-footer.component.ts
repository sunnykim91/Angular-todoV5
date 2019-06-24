import { Component, Input, Output, EventEmitter } from '@angular/core'; 
import { Todos } from '../todos.interface';

@Component({
  selector: 'app-todo-footer',
  template: `
    <div class="footer">
      <div class="complete-all">
        <input class="custom-checkbox" type="checkbox" id="ck-complete-all" (change)="toggleAllTodo()">
        <label for="ck-complete-all">Mark all as complete</label>
      </div>
      <div class="clear-completed">
        <button class="btn" (click)="clearCompleted()" >Clear completed (<span class="completed-todos">{{getCompletedCount()}}</span>)</button>
        <strong class="active-todos">{{getunCompletedCount()}}</strong> items left
      </div>
    </div>
  `,
  styles: [`
    
.footer {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.complete-all, .clear-completed {
  position: relative;
  flex-basis: 50%;
}

.clear-completed {
  text-align: right;
  padding-right: 15px;
}

.btn {
  padding: 1px 5px;
  font-size: .8em;
  line-height: 1.5;
  border-radius: 3px;
  outline: none;
  color: #333;
  background-color: #fff;
  border-color: #ccc;
  cursor: pointer;
}

.btn:hover {
  color: #333;
  background-color: #e6e6e6;
  border-color: #adadad;
}
.custom-checkbox {
      display: none;
    }
    
    .custom-checkbox + label {
      position: absolute; /* 부모 위치를 기준으로 */
      top: 50%;
      left: 15px;
      transform: translate3d(0, -50%, 0);
      display: inline-block;
      width: 90%;
      line-height: 2em;
      padding-left: 35px;
      cursor: pointer;
      user-select: none;
    }
    
    .custom-checkbox + label:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate3d(0, -50%, 0);
      width: 20px;
      height: 20px;
      background-color: #fff;
      border: 1px solid #cfdadd;
    }
    
    .custom-checkbox:checked + label:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 6px;
      transform: translate3d(0, -50%, 0);
      width: 10px;
      height: 10px;
      background-color: #23b7e5;
    }
    
  `]
})
export class TodoFooterComponent  {
  @Input() todos: Todos[];
  @Output() toggleAll = new EventEmitter();
  @Output() clearCom = new EventEmitter();

  completedcount: number;
  uncompletedcount: number;

  toggleAllTodo(){
    this.toggleAll.emit();
  }
  clearCompleted(){
    this.clearCom.emit();
  }
  getCompletedCount() {
    return this.completedcount = this.todos.filter((todo) => todo.completed === true).length;
  }
  getunCompletedCount() {
    return this.uncompletedcount = this.todos.filter((todo) => todo.completed === false).length;
  }

}
