import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// components
import { LaboratoryComponent } from "./laboratory.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { QuotesComponent } from "./pages/quotes/quotes.component";

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
        path: "",
        redirectTo: "contacto"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboratoryRoutingModule {}
