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
      path: "servicios",
      name: "Servicios"
    },
    {
      path: "equipos",
      name: "Equipos"
    },
    {
      path: "investigaciones",
      name: "Investigaciones"
    },
    {
      path: "laboratorios",
      name: "Laboratorios"
    },
    {
      path: "contacto",
      name: "Contacto"
    },
    {
      path: "cotizaciones",
      name: "Cotizaciones"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
