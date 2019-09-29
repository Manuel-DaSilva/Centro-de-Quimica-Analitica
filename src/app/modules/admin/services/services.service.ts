import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { URL_SERVICES } from "src/app/config/config";

@Injectable({
  providedIn: "root"
})
export class ServicesService {
  constructor(private router: Router, private http: HttpClient) {}

  /*
   * @desc handles the petition to the backend API to get all services data
   */
  reqServices() {
    // url of api endpoint
    const url = URL_SERVICES + "api/url/services";
    // needed config
    const headers = new HttpHeaders({});
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
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }


  /*
   * @desc handles the petition to the backend API to create a new service
   */
  createService(service) {
    // url of api endpoint
    const url = URL_SERVICES + "api/new/service";
    // needed config
    const headers = new HttpHeaders({});
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
    const url = URL_SERVICES + "api/update/service";
    // needed config
    const headers = new HttpHeaders({});
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
    const url = URL_SERVICES + "api/delete/service";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    const body = {
      id: service.id
    };
    // returning the petition
    return this.http.post(url, body, config);
  }
}
