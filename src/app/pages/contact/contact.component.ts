import { Component } from "@angular/core";
import { BackendService } from "../../services/backend.service";

@Component({
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent {
  formData = {
    name: "",
    email: ""
  };

  errors = {
    name: "",
    email: ""
  };

  nameValid = false;
  emailValid = false;

  constructor(private backend: BackendService) {}

  validateName = () => {
    if (!this.formData.name) {
      this.nameValid = false;
      this.errors.name = "Name is Required";
    } else if (this.formData.name.length < 3) {
      this.nameValid = false;
      this.errors.name = "Name needs to be longer than 3 characters";
    } else {
      this.nameValid = true;
      this.errors.name = "";
    }
  };

  validateEmail = () => {
    if (!this.formData.email) {
      this.emailValid = false;
      this.errors.email = "Email is Required";
    } else if (this.formData.email.length < 3) {
      this.emailValid = false;
      this.errors.email = "Email needs to be longer than 3 characters";
    } else if (!this.formData.email.includes("@")) {
      this.emailValid = false;
      this.errors.email = "Must be valid email";
    } else {
      this.emailValid = true;
      this.errors.email = "";
    }
  };

  submit = () => {
    console.log(this.formData);
    this.backend.contact(this.formData).then(response => {
      console.log(response);
    });
  };
}
