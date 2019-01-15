export class Todo {
    
 task: string = '';
 id: number; 
 finished: boolean = false; 

 constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}