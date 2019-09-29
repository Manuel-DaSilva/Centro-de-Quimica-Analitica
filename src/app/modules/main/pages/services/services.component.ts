import { Component, OnInit } from "@angular/core";
import { Service } from "src/app/models/service.interface";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styles: []
})
export class ServicesComponent implements OnInit {
  public organizedServices;
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

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // this.getServices();
    this.configServices();
  }

  /*
   * @desc divides all services into his categories
   */
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
    this.organizedServices = Array.from(servicesOrganized);
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

  /*
   * @desc handles the request to get the services data
   */
  getServices() {
    this.dataService.reqServices().subscribe(
      (res: any) => {
        this.services = res.data;
        this.configServices();
      },
      err => {
        console.log("error getting services");
        console.log(err);
      }
    );
  }
}
