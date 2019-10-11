import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ServicesModalComponent } from "./modules/admin/pages/services/components/services-modal/services-modal.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
@NgModule({
  declarations: [AppComponent, ServicesModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  bootstrap: [AppComponent],
  entryComponents: [ServicesModalComponent]
})
export class AppModule {}