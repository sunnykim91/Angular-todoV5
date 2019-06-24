import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodosComponent} from './todos/todos.component'
import { SunnyTestComponent } from './sunny-test/sunny-test.component'


const routes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'prefix' },
  { path: 'todos', component: TodosComponent},
  { path: 'sunny-test', component: SunnyTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
