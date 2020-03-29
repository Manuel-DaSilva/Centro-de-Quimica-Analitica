import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { URL_SERVICES } from "src/app/config/config";
import { AuthService } from './auth.service';
import { Service } from '../../../models/service.interface';
import { ServiceCategory } from 'src/app/models/service.category.interface';

@Injectable({
  providedIn: "root"
})
export class ServicesService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  /*
   * @desc handles the petition to the backend API to get all services data
   */
  reqServices() {
    // url of api endpoint
    const url = URL_SERVICES + "services";
    // needed config
    const headers = this.authService.getAuthHeader();
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

  /*
   * @desc handles the petition to the backend API to create a new service
   */
  createService(service: Service) {
    // url of api endpoint
    const url = URL_SERVICES + "services/create";
    // needed config
    const headers = this.authService.getAuthHeader();
    const config = { headers: headers };
    const body = {
      title: service.title,
      description: service.description,
      categoryId: service.category_id
    };
    
    // returning the petition
    return this.http.post(url, body, config);
  }

  /*
   * @desc handles the petition to the backend API to update service
   */
  updateService(service: Service) {
    // url of api endpoint
    const url = URL_SERVICES + "services/update";
    // needed config
    const headers = this.authService.getAuthHeader();
    const config = { headers: headers };
    const body = {
      id: service.id,
      title: service.title,
      description: service.description,
      categoryId: service.category_id
    };
    // returning the petition
    return this.http.put(url, body, config);
  }

  /*
   * @desc handles the petition to the backend API to delete service
   */
  deleteService(service: Service) {
    // url of api endpoint
    const url = URL_SERVICES + "services/delete";
    // needed config
    const headers = this.authService.getAuthHeader();
    const body = {
      id: service.id
    };
    const config = { headers: headers, body: body };
    // returning the petition
    return this.http.delete(url, config);
  }


  /*
   * @desc handles the petition to the backend API to get all category data
   */
  reqCategories() {
    // url of api endpoint
    const url = URL_SERVICES + "servicesCategory";
    // needed config
    const headers = this.authService.getAuthHeader();
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

  /*
   * @desc handles the petition to the backend API to create a new category
   */
  createCategory(category: ServiceCategory) {
    // url of api endpoint
    const url = URL_SERVICES + "servicesCategory/create";
    // needed config
    const headers = this.authService.getAuthHeader();
    const config = { headers: headers };
    const body = {
      title: category.title,
    };
    // returning the petition
    return this.http.post(url, body, config);
  }

  /*
   * @desc handles the petition to the backend API to update category
   */
  updateCategory(category: ServiceCategory) {
    // url of api endpoint
    const url = URL_SERVICES + "servicesCategory/update";
    // needed config
    const headers = this.authService.getAuthHeader();
    const config = { headers: headers };
    const body = {
      id: category.id,
      title: category.title,
    };
    // returning the petition
    return this.http.put(url, body, config);
  }

  /*
   * @desc handles the petition to the backend API to delete a category
   */
  deleteCategory(category: ServiceCategory) {
    // url of api endpoint
    const url = URL_SERVICES + "servicesCategory/delete";
    // needed config
    const headers = this.authService.getAuthHeader();
    const body = {
      id: category.id
    };
    const config = { headers: headers, body: body};
    // returning the petition
    return this.http.delete(url, config);
  }
}
