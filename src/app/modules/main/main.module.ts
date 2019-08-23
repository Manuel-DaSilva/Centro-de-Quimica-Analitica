import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './main.component';
import { ServicesComponent } from './pages/services/services.component';

@NgModule({
  declarations: [HomeComponent, MainComponent, ServicesComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
