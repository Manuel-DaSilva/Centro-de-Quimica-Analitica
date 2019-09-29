import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: []
})
export class SidebarComponent implements OnInit {
  public routes = [
    {
      path: "dashboard",
      name: "Dashboard",
      icon: "fa-tachometer-alt"
    },
    {
      path: "instrumentos",
      name: "Instrumentos",
      icon: "fa-hammer"
    },
    {
      path: "equipos",
      name: "Equipos",
      icon: "fa-toolbox"
    },
    {
      path: "investigaciones",
      name: "Investigaciones",
      icon: "fa-scroll"
    },
    {
      path: "laboratorios",
      name: "Laboratorios",
      icon: "fa-warehouse"
    },
    {
      path: "servicios",
      name: "Servicios",
      icon: "fa-concierge-bell"
    },
    {
      path: "miembros",
      name: "Miembros",
      icon: "fa-users"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
