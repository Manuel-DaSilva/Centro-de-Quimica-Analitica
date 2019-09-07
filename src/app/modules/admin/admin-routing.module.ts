import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//guards
import { AuthGuard } from "src/app/guards/auth.guard";

// components
import { AdminComponent } from "./admin.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./pages/login/login.component";
import { ServicesComponent } from "./pages/services/services.component";
import { EquipmentComponent } from "./pages/equipment/equipment.component";
import { InstrumentsComponent } from "./pages/instruments/instruments.component";
import { InvestigationsComponent } from "./pages/investigations/investigations.component";
import { LaboratoriesComponent } from "./pages/laboratories/laboratories.component";
import { AccountComponent } from "./pages/account/account.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "instrumentos",
        component: InstrumentsComponent
      },
      {
        path: "equipos",
        component: EquipmentComponent
      },
      {
        path: "investigaciones",
        component: InvestigationsComponent
      },
      {
        path: "laboratorios",
        component: LaboratoriesComponent
      },
      {
        path: "servicios",
        component: ServicesComponent
      },
      {
        path: "cuenta",
        component: AccountComponent
      },
      {
        path: "",
        redirectTo: "dashboard"
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: "**",
    redirectTo: "dashboard",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
