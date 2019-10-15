import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";

// modals
import { ServicesModalComponent } from "./modules/admin/pages/services/components/services-modal/services-modal.component";
import { QuoteModalComponent } from './modules/admin/pages/quotes/components/quote-modal/quote-modal.component';
@NgModule({
  declarations: [AppComponent, ServicesModalComponent,QuoteModalComponent],
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
  entryComponents: [ServicesModalComponent,QuoteModalComponent]
})
export class AppModule {}
