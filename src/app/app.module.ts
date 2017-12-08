import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ServiceWorkerModule } from "@angular/service-worker";
import { AppComponent } from "./app.component";

import { environment } from "../environments/environment";
import { DashboardComponent } from "./ui/dashboard/dashboard.component";
import {
  MatTableModule,
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatToolbarModule,
  MatInputModule
} from "@angular/material";
import { NavComponent } from "./ui/nav/nav.component";
import { ContactComponent } from "./ui/contact/contact.component";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
    ContactComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
