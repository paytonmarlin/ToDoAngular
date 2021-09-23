import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApp';

  // todo:string='';

  todoForm = this.fb.group({
    todo:['', Validators.required]
  })
  constructor(private fb: FormBuilder){  }

  todoArray:string[] = [];

  addTodo() {
    let value = this.todoForm.value.todo;
    if(value != ""){
      this.todoArray.push(value);
      console.log(value);
      this.todoForm.reset();
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
