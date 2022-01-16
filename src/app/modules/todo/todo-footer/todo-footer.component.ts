import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FilterEnum } from '../models/filter.enum';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
  noTodosClass$!: Observable<boolean>;
  activeCount$!: Observable<number>;
  itemsLeftText$!: Observable<string>;
  filter$!: Observable<FilterEnum>;
  filterEnum = FilterEnum;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.activeCount$ = this.todosService.todos$.pipe(
      map((todos) => todos.filter((todo) => !todo.isCompleted).length)
    );

    this.itemsLeftText$ = this.activeCount$.pipe(
      map((activeCount) => `item${activeCount !== 1 ? 's' : ''} left`)
    );

    this.noTodosClass$ = this.todosService.todos$.pipe(
      map((todos) => todos.length === 0)
    );

    this.filter$ = this.todosService.filter$;
  }

  changeFilter(event: Event, filterName: FilterEnum): void {
    event.preventDefault();
    this.todosService.changeFilter(filterName);
  }

  removeCompleted(event: Event): void {
    event.preventDefault();
    this.todosService.removeCompleted()
  }

}
