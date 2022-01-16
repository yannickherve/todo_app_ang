import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss']
})
export class TodoHeaderComponent implements OnInit {
  description: string = '';

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.toggleDarkTheme()
  }

  changeText(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement
    this.description = target.value;
  }

  addTodo(): void {
    if(this.description.length === 0) {
      return
    }
    this.todosService.addTodo(this.description)
    this.description = ''
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }

}
