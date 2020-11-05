import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, switchMap, take, filter} from 'rxjs/operators';
import { Todo } from '../interfaces';
import { TodoService } from '../services/todo.service';

const API: string = "https://jsonplaceholder.typicode.com/todos";

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit {
  private _todos: Todo[] = [];
  todos: Todo[] = [];
  selectedTodo: Todo | null = null;

  constructor(private http: HttpClient, private todoService: TodoService) { }

  ngOnInit(): void {
    this.http
      .get(API)
      .pipe(
        // map(v => [{title: "blablaa"}])
        // map(this.completedTodos)
        switchMap((todos: Todo[]) => todos), 
        // take(5)
        // filter((v: any) => v.userId == 5)
      )
      .subscribe((todo: Todo) => {
      this.todos.push(todo);
      this._todos.push(todo);
    });
  }

  completedTodos(todos) {
    return todos.filter(todo => todo.completed);
  }

  onKeyUp(event: any){
    // Equivaut à let value = event.target.value
    let { value } = event.target;

    if(value.length > 2){
      let search = this._todos.filter((todo: Todo) => {
        return todo.title.indexOf(value) !== -1;
      })
      console.log(search)
      this.todos = search;
    } else {
      this.todos = [...this._todos]; // copie par valeur
    }
  }

  onKeyUp2(event: any){
    let { value } = event.target;

    if (value.length > 2) {
      this.http
        .get(API)
        .subscribe((todos: Todo[]) => {
          this.todos = todos.filter((todo: Todo) => {
            return todo.title.indexOf(value) !== -1;
        })
      })
    } else {
      // pas de filtrage si longueur de chaîne <= 2
      this.http
      .get(API)
      .subscribe((todos: Todo[]) => this.todos = todos)
    }
  }

  todoDetails(event: any, id: number) {
    let todo = this.todoService
      .getById(id)
      .subscribe((todo: Todo) => this.selectedTodo = todo )
    ;
  }

}
