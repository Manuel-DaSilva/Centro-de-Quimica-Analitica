import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { URL_SERVICES } from "src/app/config/config";
import { Service } from 'src/app/models/service.interface';

@Injectable({
  providedIn: "root"
})
export class DataService {
  // !parche
  public services: Service[] = [
    {
      id: 1,
      name: "Servicio agua1",
      description: "Descripcion servicio 1",
      category: {
        id: 2,
        name: 'category2'
      },
    },
    {
      id: 2,
      name: "Servicio agua2",
      description: "Descripcion servicio 1",
      category: {
        id: 2,
        name: 'category2'
      },
    },
    {
      id: 3,
      name: "Servicio agua3",
      description: "Descripcion servicio 1",
      category: {
        id: 2,
        name: 'category2'
      },
    },
    {
      id: 4,
      name: "Servicio suelos1",
      description: "Descripcion servicio 1",
      category: {
        id: 2,
        name: 'category2'
      },
    },
    {
      id: 5,
      name: "Servicio suelos2",
      description: "Descripcion servicio 1",
      category: {
        id: 2,
        name: 'category2'
      },
    },
    {
      id: 6,
      name: "Servicio suelos3",
      description: "Descripcion servicio 1",
      category: {
        id: 2,
        name: 'category2'
      },
    }
  ];
  constructor(private http: HttpClient) {}

  /*
   * @desc handles the petition to the backend API to get all instrumentes avaliables
   */
  reqInstruments() {
    // url of api endpoint
    const url = URL_SERVICES + "api/ulr/instruments";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

  /*
   * @desc handles the petition to the backend API to get all equipment avaliable
   */
  reqEquipment() {
    // url of api endpoint
    const url = URL_SERVICES + "equipos";
    // needed config
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

  /*
   * @desc handles the petition to the backend API to get all investigations data
   */
  reqInvestigations() {
    // url of api endpoint
    const url = URL_SERVICES + "api/ulr/investigations";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

  
  /*
   * @desc handles the petition to the backend API to get all investigations data
   */
  reqInvestigationsByMember() {
    // url of api endpoint
    const url = URL_SERVICES + "api/ulr/investigationsbymember";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

  /*
   * @desc handles the petition to the backend API to get all laboratories data
   */
  reqLaboratories() {
    // url of api endpoint
    const url = URL_SERVICES + "api/ulr/laboratories";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

  /*
   * @desc handles the petition to the backend API to get all services data
   */
  reqServices() {
    // url of api endpoint
    const url = URL_SERVICES + "api/ulr/services";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

  /*
   * @desc sends the petition to the backend API to create a new info quote
   */
  sendInfoQuote(serviceData, companyData) {
    // url of api endpoint
    const url = URL_SERVICES + "api/new/infoQuote";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    const body = {};
    // returning the petition
    return this.http.post(url, body, config);
  }
  /*
   * @desc sends the petition to the backend API to create a new service quote
   */
  sendServiceQuote(infoData, companyData) {
    // url of api endpoint
    const url = URL_SERVICES + "api/new/infoQuote";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    const body = {};
    // returning the petition
    return this.http.post(url, body, config);
  }

  getServices(){
    return this.services;
  }

  setServices(services){
    this.services = services;
  }
}
