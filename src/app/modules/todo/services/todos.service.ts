import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { v4 as uuidv4 } from 'uuid';
import { FilterEnum } from '../models/filter.enum';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos$ = new BehaviorSubject<ITodo[]>([
    {
      id: uuidv4(),
      description: 'Complete online JavaScript course',
      isCompleted: true
    },
    {
      id: uuidv4(),
      description: 'Jog around the park 3x',
      isCompleted: false
    },
    {
      id: uuidv4(),
      description: '10 minutes meditation',
      isCompleted: false
    },
    {
      id: uuidv4(),
      description: 'Read for 1 hour',
      isCompleted: false
    },
    {
      id: uuidv4(),
      description: 'Pick up groceries',
      isCompleted: false
    },
    {
      id: uuidv4(),
      description: 'Complete Todo App on Frontend Mentor',
      isCompleted: false
    }
  ]);
  filter$ = new BehaviorSubject<FilterEnum>(FilterEnum.all);

  constructor() { }

  addTodo(description: string) {
    const newTodo: ITodo = {
      id: uuidv4(),
      description: description,
      isCompleted: false
    };
    const updatedTodos = [...this.todos$.getValue(), newTodo];
    this.todos$.next(updatedTodos);
  }

  changeFilter(filterName: FilterEnum): void {
    this.filter$.next(filterName);
  }

  changeTodo(id: string, description: string): void {
    const updatedTodos = this.todos$.getValue().map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          description,
        };
      }

      return todo;
    });
    this.todos$.next(updatedTodos);
  }

  removeTodo(id: string): void {
    const updatedTodos = this.todos$
      .getValue()
      .filter((todo) => todo.id !== id);

    this.todos$.next(updatedTodos);
  }

  removeCompleted() {
    const updatedRemovingTodos = this.todos$
      .getValue()
      .filter((todo) => todo.isCompleted !== true);

    this.todos$.next(updatedRemovingTodos);
  }

  toggleTodo(id: string): void {
    const updatedTodos = this.todos$.getValue().map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    this.todos$.next(updatedTodos);
  }

}
