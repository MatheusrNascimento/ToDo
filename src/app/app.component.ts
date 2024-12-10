import { Component, OnInit, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../models/todo.model';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Tarefas do Dia';
  todos: Todo[] = [];
  form!: FormGroup;

  constructor(private fb: FormBuilder)
  {
    this.form = this.fb.group({
      title: ['',
        [Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required]]
    });
    this.todos.push(new Todo(1, 'andar com a ceci', false));
    this.todos.push(new Todo(2, 'almoçar', false));
    this.todos.push(new Todo(3, 'comprar lanche na segunda', true));
  }

  remove(todo: Todo){
    const index = this.todos.indexOf(todo);
    if (index !== -1)
      this.todos.splice(index, 1);
  }

  markAsDone(todo: Todo){
    todo.done = true;
  }

  markAsUndone(todo: Todo){
    todo.done = false;
  }

  protected readonly FormBuilder = FormBuilder;
};
