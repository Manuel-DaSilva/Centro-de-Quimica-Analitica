import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { URL_SERVICES } from "src/app/config/config";

@Injectable({
  providedIn: "root"
})
export class ServicesService {
  constructor(private http: HttpClient) {}

  /*
   * @desc handles the petition to the backend API to get all services data
   */
  reqServices() {
    // url of api endpoint
    const url = URL_SERVICES + "servicios";
    // needed config
    const headers = new HttpHeaders({"Content-Type":"application/json"});
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

  /*
   * @desc handles the petition to the backend API to get all services data
   */
  reqCategories() {
    // url of api endpoint
    const url = URL_SERVICES + "api/url/categories";
    // needed config
    const headers = new HttpHeaders({"Content-Type":"application/json"});
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

  /*
   * @desc handles the petition to the backend API to create a new service
   */
  createService(service) {
    // url of api endpoint
    const url = URL_SERVICES + "servicios/nuevo";
    // needed config
    const headers = new HttpHeaders({"Content-Type":"application/json"});
    const config = { headers: headers };
    const body = {
      name: service.name,
      description: service.description,
      category: service.category
    };
    // returning the petition
    return this.http.post(url, body, config);
  }

  /*
   * @desc handles the petition to the backend API to update service
   */
  updateService(service) {
    // url of api endpoint
    const url = URL_SERVICES + "servicios/editar";
    // needed config
    const headers = new HttpHeaders({"Content-Type":"application/json"});
    const config = { headers: headers };
    const body = {
      id: service.id,
      name: service.name,
      description: service.description,
      category: service.category
    };
    // returning the petition
    return this.http.post(url, body, config);
  }

  /*
   * @desc handles the petition to the backend API to delete service
   */
  deleteService(service) {
    // url of api endpoint
    const url = URL_SERVICES + "servicios/borrar";
    // needed config
    const headers = new HttpHeaders({"Content-Type":"application/json"});
    const config = { headers: headers };
    const body = {
      id: service.id
    };
    // returning the petition
    return this.http.post(url, body, config);
  }
}
