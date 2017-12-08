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
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatToolbarModule
} from "@angular/material";
import { NavComponent } from "./ui/nav/nav.component";
import { ContactComponent } from "./ui/contact/contact.component";
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
    MatIconModule,
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
