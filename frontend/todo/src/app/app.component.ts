import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  //template: "<h1>{{title}}</h1>",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Angular";
  message = "Welcome to in28Minutes";
  reason = "Learning the course";
}
