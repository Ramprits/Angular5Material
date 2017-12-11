import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { TrackerError } from "../../core/TrackerError";

@Injectable()
export class PostService {
  ROOT_URL = "https://jsonplaceholder.typicode.com/photos";
  constructor(private httpClient: HttpClient) {}

  GetPost(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.ROOT_URL).map((post: IPost[]) => {
      return post;
    });
  }

  private handleError(error: HttpErrorResponse): Observable<TrackerError> {
    const dataError = new TrackerError();
    dataError.errorNumber = error.status;
    dataError.message = error.statusText;
    dataError.friendlyMessage = "An error occurred retrieving data.";
    return Observable.throw(dataError);
  }
}

export interface IPost {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
