import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { SunnyPipe } from './sunny.pipe';
import { SunnyTestComponent } from './sunny-test/sunny-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    SunnyPipe,
    SunnyTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
