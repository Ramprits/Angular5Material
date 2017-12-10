import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class QuizzeService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  GetQuizze(): Observable<any[]> {
    return this.httpClient.get<any[]>(`https://localhost:44320/api/Quizzes`);
  }

  save(quizz) {
    return this.httpClient.post<any>(
      `https://localhost:44320/api/Quizzes`,
      quizz
    );
  }
}
