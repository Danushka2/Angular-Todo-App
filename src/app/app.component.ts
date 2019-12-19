import { Component, Output } from '@angular/core';
import { Todo } from './models/Todo';
import { EventEmitter } from 'protractor';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleX = 'angularTodoApp';
  // enteredTitle = "";
  // @Output() todoPostCreated = new EventEmitter<Todo>();

  onAddTodoPost(form: NgForm){
    const todo: Todo = {
      title : form.value.titleName
    };
    console.log(todo);
  }


}
