import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// components
import { LaboratoryComponent } from "./laboratory.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { QuotesComponent } from "./pages/quotes/quotes.component";
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  {
    path: "",
    component: LaboratoryComponent,
    children: [
      {
        path: "contacto",
        component: ContactComponent
      },
      {
        path: "cotizacion",
        component: QuotesComponent
      },
      {
        path: "cotizacion/:id",
        component: QuotesComponent
      },
      {
        path: "servicios",
        component: ServicesComponent
      },
      {
        path: "",
        redirectTo: "servicios"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboratoryRoutingModule {}
