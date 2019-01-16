import { Injectable } from '@angular/core';
import {Todo} from './todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  currentId = 0; 
  tasks = []; 


  constructor() { }

  addATodo(todo: Todo) {
    this.tasks.push(todo);
   this.currentId++;
  }

  DeleteTodo(todo: Todo){
   var i = this.tasks.indexOf(todo);
   this.tasks.splice (i, 1);
  }

  editTodo(todo: Todo){

    var j = this.tasks.indexOf(todo);
    
  }
}
