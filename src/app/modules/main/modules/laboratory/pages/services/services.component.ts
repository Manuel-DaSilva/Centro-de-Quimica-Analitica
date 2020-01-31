import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Service } from "src/app/models/service.interface";
import { DataService } from "../../../../services/data.service";

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
      id: 1,
      name: "Agua destilada",
      description: "",
      category: {
        id: 1,
        name: 'APOYO TECNOLÓGICO (Alquiler y uso temporal de equipos)'
      }
    },
    {
      id: 2,
      name: "Destilador de ácidos",
      description: "",
      category: {
        id: 1,
        name: 'APOYO TECNOLÓGICO (Alquiler y uso temporal de equipos)'
      }
    },
    {
      id: 3,
      name: "Estufa de secado ",
      description: "",
      category: {
        id: 1,
        name: 'APOYO TECNOLÓGICO (Alquiler y uso temporal de equipos)'
      }
    },
    {
      id: 4,
      name: "Mufla",
      description: "",
      category: {
        id: 1,
        name: 'APOYO TECNOLÓGICO (Alquiler y uso temporal de equipos)'
      }
    },
    {
      id: 5,
      name: "Congelación y conservación de muestras",
      description: "",
      category: {
        id: 1,
        name: 'APOYO TECNOLÓGICO (Alquiler y uso temporal de equipos)'
      }
    },
    {
      id: 6,
      name: "Digestión con horno microondas",
      description: "",
      category: {
        id: 1,
        name: 'APOYO TECNOLÓGICO (Alquiler y uso temporal de equipos)'
      }
    },
    {
      id: 7,
      name: "Liofilización de muestras",
      description: "",
      category: {
        id: 1,
        name: 'APOYO TECNOLÓGICO (Alquiler y uso temporal de equipos)'
      }
    },
    {
      id: 8,
      name: "Análisis fisicoquímicos",
      description: "Densidad, turbidez, pH, carbonatos, sulfatos, fosfatos, cloruros, otros.",
      category: {
        id: 2,
        name: 'ANÁLISIS QUÍMICO'
      }
    },
    {
      id: 9,
      name: "Análisis de especies inorgánicas",
      description: "Metales y metaloides, incluyendo metales pesados y tóxicos, en Aguas, Alimentos, Bebidas, Fluidos biológicos, Suelos, Fertilizantes, Combustibles, Materia prima y terminada, etc.",
      category: {
        id: 2,
        name: 'ANÁLISIS QUÍMICO'
      }
    },
    {
      id: 10,
      name: "Análisis de especies orgánicas",
      description: "Análisis de alcoholes, aldehídos, hidrocarburos y otras especies. Análisis tensoactivos iónicos en detergentes.",
      category: {
        id: 2,
        name: 'ANÁLISIS QUÍMICO'
      }
    },
    {
      id: 11,
      name: "Análisis de migración Global",
      description: "Envases, empaques comerciales, laminados, materiales quirúrgicos y otros.",
      category: {
        id: 2,
        name: 'ANÁLISIS QUÍMICO'
      }
    },
    {
      id: 12,
      name: "PREPARACIÓN DE PRODUCTOS BAJO FÓRMULA",
      description: "Soluciones bactericidas, solventes, materiales para desinfección, detergentes.",
      category: {
        id: 3,
        name: 'PREPARACIÓN DE PRODUCTOS BAJO FÓRMULA'
      }
    },
    {
      id: 13,
      name: "OPTIMIZACIÓN DE MÉTODOS DE ANÁLISIS QUÍMICO",
      description: "",
      category: {
        id: 4,
        name: 'OPTIMIZACIÓN DE MÉTODOS DE ANÁLISIS QUÍMICO'
      }
    },
    {
      id: 14,
      name: "ESTUDIOS AMBIENTALES",
      description: "Monitoreo y evaluación ambiental y riesgo laboral. Análisis de compuestos orgánicos y metales en muestras ambientales. Consultoría ambiental.",
      category: {
        id: 5,
        name: 'ESTUDIOS AMBIENTALES'
      }
    },
    {
      id: 15,
      name: "CURSOS DE ACTUALIZACIÓN TEÓRICO-PRÁCTICA",
      description: "",
      category: {
        id: 6,
        name: 'CURSOS DE ACTUALIZACIÓN TEÓRICO-PRÁCTICA'
      }
    },
    {
      id: 16,
      name: "ADIESTRAMIENTO EN EL USO DEL INSTRUMENTAL ANALÍTICO",
      description: "",
      category: {
        id: 7,
        name: 'ADIESTRAMIENTO EN EL USO DEL INSTRUMENTAL ANALÍTICO'
      }
    },
    {
      id: 16,
      name: "ASESORÍAS EN QUÍMICA ANALÍTICA",
      description: "",
      category: {
        id: 8,
        name: 'ASESORÍAS EN QUÍMICA ANALÍTICA'
      }
    },
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
      let key = item.category.name;
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
      if (item.category.name === key) {
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
    this.serviceCard.nativeElement.scrollIntoView({ behavior: "smooth" });
  }
}
