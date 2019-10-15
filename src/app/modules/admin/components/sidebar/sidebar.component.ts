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
      path: "cotizaciones",
      name: "Cotizaciones",
      icon: "fa-file-contract"
    },
    {
      path: "equipos",
      name: "Equipo",
      icon: "fa-toolbox"
    },
    {
      path: "investigaciones",
      name: "Investigaciones",
      icon: "fa-scroll"
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
    },
    
  ];
  constructor() {}

  ngOnInit() {}
}
