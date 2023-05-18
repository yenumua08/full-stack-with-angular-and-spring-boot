import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: "root",
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  excecuteHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>(
      "http://localhost:8080/hello-world-bean"
    );
    // console.log("Execute Hello World Bean Service");
  }

  excecuteHelloWorldServiceWithPathVariable(name: any) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString,
    // });
    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/hello-world/path-variable/Test`
      //  { headers }
    );
    // console.log("Execute Hello World Bean Service");
  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = "user";
  //   let password = "password";
  //   let basicAuthHeaderString =
  //     "Basic " + window.btoa(username + ":" + password);

  //   return basicAuthHeaderString;
  // }

  //Acceess to XMLHttpRequest at 'http://localhost:8080/hello-world/path-variable/Test'
  //from origin 'http://localhost:4200' has been blocked by CORS policy:
  // No 'Access-Control-Allow-Origin' header is present on the requested resource.
}
