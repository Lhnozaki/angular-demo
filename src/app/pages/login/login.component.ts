import { Component } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  formData = {
    username: "",
    password: ""
  };

  errors = {
    login: ""
  };

  constructor(private auth: AuthService) {}

  login = () => {
    this.auth
      .login(this.formData)
      .then(() => {
        console.log("Finished logging in.");
      })
      .catch(err => console.log(err));
  };
}
