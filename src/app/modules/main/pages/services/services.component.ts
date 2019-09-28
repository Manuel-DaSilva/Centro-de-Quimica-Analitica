import { Component, OnInit } from "@angular/core";
import { Service } from "src/app/models/service.interface";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styles: []
})
export class ServicesComponent implements OnInit {
  public servicesOrganized;
  // !test
  public services: Array<Service> = [
    {
      id: "1",
      name: "Servicio 1",
      description: "Descripcion servicio 1",
      category: "Tratamiento de agua"
    },
    {
      id: "2",
      name: "Servicio 2",
      description: "Descripcion servicio 1",
      category: "Tratamiento de agua"
    },
    {
      id: "3",
      name: "Servicio 3",
      description: "Descripcion servicio 1",
      category: "Tratamiento de agua"
    },
    {
      id: "4",
      name: "Servicio 4",
      description: "Descripcion servicio 1",
      category: "Suelos"
    },
    {
      id: "5",
      name: "Servicio 5",
      description: "Descripcion servicio 1",
      category: "Suelos"
    },
    {
      id: "5",
      name: "Servicio 5",
      description: "Descripcion servicio 1",
      category: "Quimicos"
    }
  ];

  constructor() {}

  ngOnInit() {
    this.configServices();
  }

  configServices() {
    // creating new map
    const servicesOrganized = new Map();
    this.services.forEach(item => {
      let key = item.category;
      if (servicesOrganized.has(key)) {
        // do nothing, category was added
      } else {
        // getting al linked services
        let collection = this.getServicesByKey(key);
        servicesOrganized.set(key, collection);
      }
    });
    this.servicesOrganized = Array.from(servicesOrganized);
  }

  /*
   * @desc returns all services linked to the given category
   * @param key category
   */
  getServicesByKey(key) {
    let collection = [];
    this.services.forEach(item => {
      if (item.category === key) {
        collection.push(item);
      }
    });
    return collection;
  }
}
