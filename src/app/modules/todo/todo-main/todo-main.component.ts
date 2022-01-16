import { Component, OnInit } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

import { FilterEnum } from '../models/filter.enum';
import { ITodo } from '../models/todo.interface';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todo-main',
  templateUrl: './todo-main.component.html',
  styleUrls: ['./todo-main.component.scss']
})
export class TodoMainComponent implements OnInit {
  visibleTodos$: Observable<ITodo[]>;
  editingId: string | null = null;

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker',
  ];
  test!: ITodo[]
  test2 = [
    { id: "98bf71e6-eee1-4094-a20d-fc11be02d2d0", description: "Complete online JavaScript course", isCompleted: true },
    { id: "fdfc45cc-8ade-41c6-8f48-47312fe3c1f8", description: "Jog around the park 3x", isCompleted: false },
    { id: "179f33f6-9700-4d7a-b501-6f72adecabbc", description: "10 minutes meditation", isCompleted: false },
    { id: "15ab1793-1288-4157-b4b3-9515bda6c174", description: "Pick up groceries", isCompleted: false },
    { id: "53734fa0-cf18-4b8c-afd6-cc887bb1fa10", description: "Complete Todo App on Frontend Mentor", isCompleted: false }
  ]

  constructor(private todosService: TodosService) {
    this.visibleTodos$ = combineLatest(
      [this.todosService.todos$,
      this.todosService.filter$
    ]).pipe(
      map(([todos, filter]: [ITodo[], FilterEnum]) => {
        if (filter === FilterEnum.active) {
          return todos.filter((todo) => !todo.isCompleted);
        } else if (filter === FilterEnum.completed) {
          return todos.filter((todo) => todo.isCompleted);
        }
        return todos;

      })
    );

   }

  ngOnInit(): void {
    this.visibleTodos$.subscribe(res => {
      console.log(res);

    })
    console.log(this.test);

  }

  setEditingId(editingId: string | null): void {
    this.editingId = editingId;
  }

  drop(event: CdkDragDrop<any>) {
    console.log(event.container.data)
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }

}
