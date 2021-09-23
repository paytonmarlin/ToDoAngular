import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApp';

  todo:string='';

  todoArray:string[] = [];

  addTodo() {
    if(this.todo != ""){
      this.todoArray.push(this.todo);
      console.log(this.todo);
    }
    else {
      alert("Todo field required");
    }
  }

  deleteItem(todo:string){
    for(let i = 0; i < this.todoArray.length; i++){
      if(todo == this.todoArray[i]){
        console.log("deleted item: " + this.todoArray[i]);
        this.todoArray.splice(i, 1);
      }
    }
  }
}
