import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { QuizzService } from "./quizz.service";

@Component({
  selector: "o-quizz",
  templateUrl: "./quizz.component.html"
})
export class QuizzComponent implements OnInit {
  quizzForm;
  constructor(private fb: FormBuilder, private quizz: QuizzService) {}

  ngOnInit() {}
  BuildQuizzForm() {
    this.quizzForm = this.fb.group({
      title: ["", [Validators.required]]
    });
  }
}
