import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainRoutingModule } from "./main-routing.module";
import { HomeComponent } from "./pages/home/home.component";
import { MainComponent } from "./main.component";
import { ServicesComponent } from "./pages/services/services.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { QuotesComponent } from "./pages/quotes/quotes.component";
import { EquipmentComponent } from "./pages/equipment/equipment.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { ResearchesComponent } from "./pages/researches/researches.component";
import { LaboratoriesComponent } from "./pages/laboratories/laboratories.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    ServicesComponent,
    HeaderComponent,
    FooterComponent,
    QuotesComponent,
    EquipmentComponent,
    ContactComponent,
    ResearchesComponent,
    LaboratoriesComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule
  ]
})
export class MainModule {}
