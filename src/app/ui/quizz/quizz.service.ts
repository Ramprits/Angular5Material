import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class QuizzService {
  constructor(private httpClient: HttpClient) {}
  save(quizz) {
    return this.httpClient
      .post<any>(`https://localhost:44320/api/Quizzes`, quizz)
      .subscribe(res => {
        return res;
      });
  }
}
