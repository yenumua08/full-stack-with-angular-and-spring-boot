import { Component, OnInit } from "@angular/core";
import { TodoDataService } from "../service/data/todo-data.service";
import { Router } from "@angular/router";

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: "app-list-todos",
  templateUrl: "./list-todos.component.html",
  styleUrls: ["./list-todos.component.css"],
})
export class ListTodosComponent implements OnInit {
  todos: Todo[] | any;
  message: string | any;
  //  = [
  //   new Todo(1, "Learn to Dance", false, new Date()),
  //   new Todo(2, "Expert in Angular", false, new Date()),
  //   new Todo(3, "Visit India", true, new Date()),
  //   // { id: 1, description: "Learn to Dance" },
  //   // { id: 2, description: "Learn Angular" },
  //   // { id: 3, description: "Visit India" },
  // ];
  // todo = {
  //   id: 1,
  //   description: "Learn to Code",
  // };
  constructor(private todoService: TodoDataService, private router: Router) {}
  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos("Prashanth").subscribe((response) => {
      console.log(response);
      this.todos = response;
    });
  }
  deleteTodo(id: any) {
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo("Prashanth", id).subscribe((response) => {
      console.log(response);
      this.message = `Delete of Todo ${id} Successful `;
    });
  }
  updateTodo(id: any) {
    console.log(`update ${id}`);
    this.router.navigate(["todos", id]);
  }
  addTodo() {
    this.router.navigate(["todos", -1]);
  }
}
