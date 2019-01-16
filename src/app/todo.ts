export class Todo {
    
 task: string = '';
 description: string = '';
 id: number; 
 finished: boolean = false; 

 constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}