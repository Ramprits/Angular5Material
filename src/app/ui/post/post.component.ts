import { Component, OnInit, ViewChild } from "@angular/core";
import { PostService, IPost } from "./post.service";
import { TrackerError } from "../../core/TrackerError";
import { MatTableDataSource, MatPaginator } from "@angular/material";

@Component({
  selector: "o-post",
  templateUrl: "./post.component.html"
})
export class PostComponent implements OnInit {
  public displayedColumns = ["Id", "title", "url"];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  posts: any[];
  dataSource = new MatTableDataSource<IPost>(this.posts);
  constructor(private post: PostService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.post.GetPost().subscribe(
      (post: IPost[]) => {
        this.posts = post;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
