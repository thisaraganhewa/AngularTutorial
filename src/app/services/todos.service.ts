import { inject, Injectable } from '@angular/core';
import { Todo } from '../models/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  http = inject(HttpClient);

  getTodo(){

    const url = "https://jsonplaceholder.typicode.com/todos"

    return this.http.get<Array<Todo>>(url)

  }
}
