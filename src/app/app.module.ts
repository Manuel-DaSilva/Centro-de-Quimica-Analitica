import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";

// modals
import { ServicesModalComponent } from "./modules/admin/pages/services/components/services-modal/services-modal.component";
import { QuoteModalComponent } from './modules/admin/pages/quotes/components/quote-modal/quote-modal.component';
import { CategoryModalComponent } from './modules/admin/pages/services/components/category-modal/category-modal.component';
import { MemberModalComponent } from './modules/admin/pages/members/components/member-modal/member-modal.component';
import { EquipmentModalComponent } from './modules/admin/pages/equipment/components/equipment-modal/equipment-modal.component';
import { InvestigationModalComponent } from './modules/admin/pages/investigations/components/investigation-modal/investigation-modal.component';
import { EquipmentCategoryModalComponent } from './modules/admin/pages/equipment/components/category-modal/equipment.category-modal.component';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent,
    ServicesModalComponent,
    QuoteModalComponent,
    CategoryModalComponent,
    MemberModalComponent,
    EquipmentModalComponent,
    InvestigationModalComponent,
    EquipmentCategoryModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    PipesModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ServicesModalComponent,
    QuoteModalComponent,
    CategoryModalComponent,
    MemberModalComponent,
    EquipmentModalComponent,
    InvestigationModalComponent,
    EquipmentCategoryModalComponent]
})
export class AppModule {}
