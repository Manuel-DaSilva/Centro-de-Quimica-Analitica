import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// routes
import { MainRoutingModule } from "./main-routing.module";

// pages
import { HomeComponent } from "./pages/home/home.component";
import { MainComponent } from "./main.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { EquipmentComponent } from "./pages/equipment/equipment.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { ResearchesComponent } from "./pages/researches/researches.component";

// modules
import { HttpClientModule } from "@angular/common/http";
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    EquipmentComponent,
    ContactComponent,
    ResearchesComponent
  ],
  imports: [CommonModule, MainRoutingModule, HttpClientModule,PipesModule]
})
export class MainModule {}
