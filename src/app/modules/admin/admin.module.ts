import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { AdminComponent } from "./admin.component";
import { LoginComponent } from "./pages/login/login.component";
import { ServicesComponent } from "./pages/services/services.component";
import { LaboratoriesComponent } from "./pages/laboratories/laboratories.component";
import { InvestigationsComponent } from "./pages/investigations/investigations.component";
import { InstrumentsComponent } from "./pages/instruments/instruments.component";
import { EquipmentComponent } from "./pages/equipment/equipment.component";
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    LoginComponent,
    ServicesComponent,
    LaboratoriesComponent,
    InvestigationsComponent,
    InstrumentsComponent,
    EquipmentComponent,
    LoaderComponent
  ],
  imports: [CommonModule, AdminRoutingModule]
})
export class AdminModule {}
