import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [DashboardComponent, AdminComponent, LoginComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
