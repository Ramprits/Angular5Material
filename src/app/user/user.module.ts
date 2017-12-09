import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { AuthService } from "./auth.service";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { MatInputModule, MatButtonModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    FlexLayoutModule,
    RouterModule.forChild([
      { path: "", pathMatch: "full", redirectTo: "register" },
      { path: "register", component: RegisterComponent }
    ])
  ],
  declarations: [RegisterComponent, LoginComponent, ProfileComponent],
  providers: [AuthService]
})
export class UserModule {}
