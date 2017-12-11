import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ServiceWorkerModule } from "@angular/service-worker";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { environment } from "../environments/environment";
import { DashboardComponent } from "./ui/dashboard/dashboard.component";
import {
  MatTableModule,
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatInputModule,
  MatSnackBarModule
} from "@angular/material";
import { NavComponent } from "./ui/nav/nav.component";
import { ContactComponent } from "./ui/contact/contact.component";
import { FormsModule } from "@angular/forms";
import { PostComponent } from "./ui/post/post.component";
import { PostService } from "./ui/post/post.service";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "./user/auth.service";
import { QuizzeComponent } from "./quizze/quizze.component";
import { QuizzeService } from "./quizze/quizze.service";
import { CoreModule } from "./core/core.module";
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
    ContactComponent,
    PostComponent,
    QuizzeComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatCheckboxModule,
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    FlexLayoutModule,
    environment.production
      ? ServiceWorkerModule.register("/ngsw-worker.js")
      : []
  ],
  providers: [PostService, AuthService, QuizzeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
