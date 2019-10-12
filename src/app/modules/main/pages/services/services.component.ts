import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Service } from "src/app/models/service.interface";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styles: []
})
export class ServicesComponent implements OnInit {
  public organizedServices;
  public selectedService: Service;
  // !test
  public services: Service[] = [
    {
      id: "1",
      name: "Servicio agua1",
      description: "Descripcion servicio 1",
      category: "Tratamiento de agua"
    },
    {
      id: "2",
      name: "Servicio agua2",
      description: "Descripcion servicio 1",
      category: "Tratamiento de agua"
    },
    {
      id: "3",
      name: "Servicio agua3",
      description: "Descripcion servicio 1",
      category: "Tratamiento de agua"
    },
    {
      id: "4",
      name: "Servicio suelos1",
      description: "Descripcion servicio 1",
      category: "Suelos"
    },
    {
      id: "5",
      name: "Servicio suelos2",
      description: "Descripcion servicio 1",
      category: "Suelos"
    },
    {
      id: "5",
      name: "Servicio suelos3",
      description: "Descripcion servicio 1",
      category: "Quimicos"
    }
  ];

  @ViewChild('serviceCard') serviceCard: ElementRef;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    // this.getServices();
    this.configServices();
    this.dataService.setServices(this.services);
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
      (res: Service[]) => {
        this.services = res;
        this.configServices();
      },
      err => {
        console.log("error getting services");
        console.log(err);
      }
    );
  }

  setService(service: Service){
    this.selectedService = service;
    this.serviceCard.nativeElement.classList.add('fadeIn');
    setTimeout(() => {
      this.serviceCard.nativeElement.classList.remove('fadeIn');
    }, 800);
    
  }
}
