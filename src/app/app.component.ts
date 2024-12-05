import { Component, OnInit, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'Tarefas do Dia';
  todos: any[] = [];

  ngOnInit(): void {
    this.todos.push('Passear com o gato');
    this.todos.push('Ir ao mercado');
    this.todos.push('Sair para jantar');
  }
};
