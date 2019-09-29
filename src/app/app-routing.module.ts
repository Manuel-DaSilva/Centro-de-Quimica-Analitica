import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "sitio",
    loadChildren: "./modules/main/main.module#MainModule"
  },
  {
    path: "admin",
    loadChildren: "./modules/admin/admin.module#AdminModule"
  },
  {
    path: "**",
    redirectTo: "sitio",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
