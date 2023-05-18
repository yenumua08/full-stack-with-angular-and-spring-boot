import { WelcomeDataService } from "./../service/data/welcome-data.service";
import { ActivatedRoute } from "@angular/router";
//package com.in28minutes.springboot.web;

//import org.springframework.boot.SpringApplication;
import { Component, OnInit } from "@angular/core"; //'./app.component';
//import { AppComponent } from '../app.component';

//@ComponentScan(
//      value = "com.in28minutes.springboot.web")
@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"],
})

//public class SpringBootFirstWebApplication implements SomeInterface{
export class WelcomeComponent implements OnInit {
  message = "Some Welcome Message";
  welcomeMessageFromService: string = "";
  name = "";
  //String message = "Some Welcome Message"

  //public SpringBootFirstWebApplication() {

  //ActivatedRoute
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {}

  // void init() {
  ngOnInit() {
    //COMPILATION ERROR this.message = 5
    //console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    // this.name = this.route.snapshot.params["name"];
  }

  getWelcomeMessage() {
    //  console.log(this.service.excecuteHelloWorldBeanService());
    this.service.excecuteHelloWorldBeanService().subscribe(
      (response) => this.handleSuccessfulResponse(response),
      (error) => this.handleErrorResponse(error)
    );
    //  console.log("last line of getWelcomeMessage");
  }

  getWelcomeMessageWithParameter() {
    // console.log(this.service.excecuteHelloWorldBeanService());
    this.service.excecuteHelloWorldServiceWithPathVariable(this.name).subscribe(
      (response) => this.handleSuccessfulResponse(response),
      (error) => this.handleErrorResponse(error)
    );
    //  console.log("last line of getWelcomeMessage");
  }

  handleSuccessfulResponse(response: any) {
    this.welcomeMessageFromService = response.message;
    // console.log(response);
    // console.log(response.message);
  }
  handleErrorResponse(error: any) {
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;
  }
}
