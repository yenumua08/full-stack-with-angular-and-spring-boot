import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-error",
  templateUrl: "./error.component.html",
  styleUrls: ["./error.component.css"],
})
export class ErrorComponent implements OnInit {
  errorMessage =
    "Internal Server Error Occured! Contact Support at 123-345-8575";

  constructor() {}

  ngOnInit() {}
}
