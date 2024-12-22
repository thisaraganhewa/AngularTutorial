import { Component, inject, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../../models/todo.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  
  todoService = inject(TodosService)

  todoItems: Array<Todo> = []

  ngOnInit() {
   //console.log(this.todoService.todoItems)
   this.todoService.getTodo()
   .pipe(
    catchError((err) => {
      console.log(err)
      throw err
    })
   )
   .subscribe((todo) => {

    this.todoItems = todo;

   })
  }
  

}
