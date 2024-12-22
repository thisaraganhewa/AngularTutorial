import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoItems: Array<Todo> = [
    {

      title: 'groceries',
      id: 1,
      userId: 1,
      completed: false

    },
    {

      title: 'Car wash',
      id: 2,
      userId: 1,
      completed: false

    },
  ]

  constructor() { }
}
