import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { MainComponent } from './main.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { EquipmentComponent } from './pages/equipment/equipment.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ResearchesComponent } from './pages/researches/researches.component';
import { QuotesComponent } from './pages/quotes/quotes.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'servicios',
        component: ServicesComponent
      },
      {
        path: 'equipos',
        component: EquipmentComponent
      },
      {
        path: 'contacto',
        component: ContactComponent
      },

      {
        path: 'investigaciones',
        component: ResearchesComponent
      },
      {
        path: 'cotizaciones',
        component: QuotesComponent
      },
      {
        path: '',
        redirectTo: 'home'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
