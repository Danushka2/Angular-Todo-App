import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todosLimit: string = '?_limit=5';
 // todosUrl: string = 'https://jsonplaceholder.typicode.com/todos' + this.todosLimit;
  todosUrl: string = 'http://localhost:3000/api/posts';

  constructor( private http: HttpClient ) { }

  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.todosUrl);
  }
}
