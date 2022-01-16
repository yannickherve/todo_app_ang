import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoHomeComponent } from './todo-home/todo-home.component';

const routes: Routes = [
  {
    path: '',
    component: TodoHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
