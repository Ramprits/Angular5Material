import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./ui/dashboard/dashboard.component";
import { ContactComponent } from "./ui/contact/contact.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "dashboard" },
  { path: "dashboard", component: DashboardComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
