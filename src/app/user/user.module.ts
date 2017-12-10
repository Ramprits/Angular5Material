import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { AuthService } from "./auth.service";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { MatInputModule, MatButtonModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AuthInterceptor } from "./auth.interceptor";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    FlexLayoutModule,
    RouterModule.forChild([
      { path: "", pathMatch: "full", redirectTo: "register" },
      { path: "register", component: RegisterComponent },
      { path: "login", component: LoginComponent }
    ])
  ],
  declarations: [RegisterComponent, LoginComponent, ProfileComponent],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class UserModule {}
