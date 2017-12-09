import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "o-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }
  onSubmit(registerForm) {
    console.log(registerForm);
  }
}

export class Register {
  public email: string;
  public password: string;
}
