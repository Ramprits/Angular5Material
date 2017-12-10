import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { QuizzeService } from "./quizze.service";

@Component({
  selector: "o-quizze",
  templateUrl: "./quizze.component.html"
})
export class QuizzeComponent implements OnInit {
  quizzes: any[];
  Quizze: FormGroup;
  constructor(private fb: FormBuilder, private quizze: QuizzeService) {}
  ngOnInit() {
    this.Quizze = this.fb.group({
      title: ["", [Validators.required]]
    });
  }

  getQuizzes() {
    this.quizze.GetQuizze().subscribe(
      res => {
        this.quizzes = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}
