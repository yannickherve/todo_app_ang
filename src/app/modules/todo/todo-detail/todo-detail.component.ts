import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

import { ITodo } from '../models/todo.interface';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit, OnChanges {
  @Input() todo!: ITodo;
  @Input('isEditing') isEditingProps!: boolean;
  @Output('setEditingId') setEditingIdEvent: EventEmitter< string | null> = new EventEmitter();

  editingText: string = '';
  @ViewChild('textInput') textInput!: ElementRef;

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.editingText = this.todo.description;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isEditingProps'].currentValue) {
      setTimeout(() => {
        this.textInput.nativeElement.focus();
      }, 0);
    }
  }

  setTodoInEditMode(): void {
    this.setEditingIdEvent.emit(this.todo.id);
  }

  removeTodo(): void {
    this.todosService.removeTodo(this.todo.id);
  }

  toggleTodo(): void {
    this.todosService.toggleTodo(this.todo.id);
  }

  changeText(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.editingText = value;
  }

  changeTodo(): void {
    this.todosService.changeTodo(this.todo.id, this.editingText);
    this.setEditingIdEvent.emit(null);
  }

}
