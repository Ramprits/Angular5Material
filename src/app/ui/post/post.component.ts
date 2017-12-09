import { Component, OnInit } from "@angular/core";
import { PostService, IPost } from "./post.service";
import { TrackerError } from "../../core/TrackerError";
import { MatTableDataSource } from "@angular/material";

@Component({
  selector: "o-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {
  displayedColumns = ["Id", "Title", "URL"];
  posts: IPost[] | TrackerError;
  constructor(private post: PostService) {}

  ngOnInit() {
    this.post.GetPost().subscribe(post => {
      this.posts = post;
    });
  }
}
