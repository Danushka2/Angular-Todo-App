import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor( private todoService: TodosService ) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos['posts'];
    });
  }

  // btnGetTodos(){
    
  // }

}
