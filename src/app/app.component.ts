import { Component } from '@angular/core';
import {TodoService} from './todo.service';
import {Todo} from './todo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]
})
export class AppComponent {
  newTodo: Todo = new Todo();
  tasks: any = []; 

constructor(private todoService: TodoService){};

addTodo(){
  this.todoService.addATodo(this.newTodo);
  console.log(this.newTodo);
  console.log(this.todoService.tasks);
  this.newTodo = new Todo();

}

deleteTodo(todo){
  this.todoService.DeleteTodo(todo);
  console.log(todo);
}



  title = 'to-do';
}
