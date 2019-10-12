import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styles: []
})
export class HeaderComponent implements OnInit {
  public routes = [
    {
      path: "home",
      name: "Home"
    },
    {
      path: "investigaciones",
      name: "Investigaciones"
    },
    {
      path: "equipos",
      name: "Equipos"
    },
    {
      path: "servicios",
      name: "Servicios"
    },
    {
      path: "contacto",
      name: "Contacto"
    },
    {
      path: "laboratorio",
      name: "Laboratorio",
      class: "lab"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
