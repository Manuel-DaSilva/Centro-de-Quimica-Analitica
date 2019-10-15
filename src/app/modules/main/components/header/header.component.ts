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
      name: "Investigación"
    },
    {
      path: "equipos",
      name: "Equipo"
    },
    {
      path: "contacto",
      name: "Contacto"
    },
    {
      path: "servicios",
      name: "Servicios",
    }
  ];

  constructor() {}

  ngOnInit() {}
}
