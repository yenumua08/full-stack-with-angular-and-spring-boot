import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HardcodedAuthenticationService } from "../service/hardcoded-authentication.service";
import { BasicAuthenticationService } from "../service/basic-authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  username = "in28minutes";
  password = "";
  errorMessage = "Invalid Credentials";
  invalidLogin = false;

  constructor(
    private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService
  ) {}

  ngOnInit() {}

  handleLogin() {
    console.log(this.username);
    // if (this.username === "in28minutes" && this.password === "dummy") {
    //Redirect to welcome page
    if (
      this.hardcodedAuthenticationService.authenticate(
        this.username,
        this.password
      )
    ) {
      this.router.navigate(["welcome", this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin() {
    // let username = "in28minutes";
    // let password = "dummy";
    this.basicAuthenticationService
      .executeAuthenticationService(this.username, this.password)
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(["welcome", this.username]);
          this.invalidLogin = false;
        },
        (error) => {
          console.log(error);
          this.invalidLogin = true;
        }
      );

    this.router.navigate(["welcome", this.username]);
    this.invalidLogin = false;
  }

  handleJWTAuthLogin() {
    // let username = "in28minutes";
    // let password = "dummy";
    this.basicAuthenticationService
      .executeJWTAuthenticationService(this.username, this.password)
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(["welcome", this.username]);
          this.invalidLogin = false;
        },
        (error) => {
          console.log(error);
          this.invalidLogin = true;
        }
      );
  }
}
