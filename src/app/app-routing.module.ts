import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./ui/dashboard/dashboard.component";
import { ContactComponent } from "./ui/contact/contact.component";
import { PostComponent } from "./ui/post/post.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "dashboard" },
  { path: "dashboard", component: DashboardComponent },
  { path: "contact", component: ContactComponent },
  { path: "post", component: PostComponent },
  { path: "user", loadChildren: "app/user/user.module#UserModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
