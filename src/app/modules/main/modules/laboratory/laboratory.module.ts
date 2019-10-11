import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// pages
import { ContactComponent } from "./pages/contact/contact.component";
import { LaboratoryComponent } from "./laboratory.component";
import { QuotesComponent } from "./pages/quotes/quotes.component";

// routes
import { LaboratoryRoutingModule } from "./laboratory-routing.module";
import { HeaderComponent } from "./components/header/header.component";

// modules
import { ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    ContactComponent,
    LaboratoryComponent,
    HeaderComponent,
    QuotesComponent
  ],
  imports: [
    CommonModule,
    LaboratoryRoutingModule,
    ReactiveFormsModule,
    ToastrModule,
    NgbModule
  ]
})
export class LaboratoryModule {}
