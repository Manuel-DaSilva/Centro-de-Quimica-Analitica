import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";

import { AdminComponent } from "./admin.component";

// components / pages
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./pages/login/login.component";
import { ServicesComponent } from "./pages/services/services.component";
import { InvestigationsComponent } from "./pages/investigations/investigations.component";
import { EquipmentComponent } from "./pages/equipment/equipment.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { AccountComponent } from "./pages/account/account.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MembersComponent } from './pages/members/members.component';
import { QuotesComponent } from './pages/quotes/quotes.component';

// modules
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    LoginComponent,
    ServicesComponent,
    InvestigationsComponent,
    EquipmentComponent,
    LoaderComponent,
    AccountComponent,
    SidebarComponent,
    NavbarComponent,
    MembersComponent,
    QuotesComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ]
})
export class AdminModule {}
