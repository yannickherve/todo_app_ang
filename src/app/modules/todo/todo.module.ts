import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TodoHomeComponent } from './todo-home/todo-home.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoMainComponent } from './todo-main/todo-main.component';


@NgModule({
  declarations: [
    TodoHomeComponent,
    TodoDetailComponent,
    TodoHeaderComponent,
    TodoFooterComponent,
    TodoMainComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    SharedModule,
  ]
})
export class TodoModule { }
