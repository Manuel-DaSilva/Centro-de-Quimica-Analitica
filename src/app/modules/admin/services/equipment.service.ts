import { EquipmentCategory } from './../../../models/equipment.category.interface';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { URL_SERVICES } from "src/app/config/config";

// models
import { Equipment } from 'src/app/models/equipment.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: "root"
})
export class EquipmentService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  /*
   * @desc handles the petition to the backend API to get all equipment data
   */
  reqEquiments() {
    // url of api endpoint
    const url = URL_SERVICES + "equipment";
    // needed config
    const headers = this.authService.getAuthHeader();
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

  /*
   * @desc handles the petition to the backend API to create a new equipment
   */
  createEquiment(equipment: Equipment) {
    // url of api endpoint
    const url = URL_SERVICES + "equipment/create";
    // needed config
    const headers = this.authService.getAuthHeader();
    const config = { headers: headers };
    const body = {
      title: equipment.title,
      categoryId: equipment.category_id
    };
    // returning the petition
    return this.http.post(url, body, config);
  }

  /*
   * @desc handles the petition to the backend API to update equipment
   */
  updateEquiment(equipment: Equipment) {
    // url of api endpoint
    const url = URL_SERVICES + "equipment/update";
    // needed config
    const headers = this.authService.getAuthHeader();
    const config = { headers: headers };
    const body = {
      id: equipment.id,
      title: equipment.title,
      categoryId: equipment.category_id
    };
    // returning the petition
    return this.http.put(url, body, config);
  }

  /*
   * @desc handles the petition to the backend API to delete laboratory
   */
  deleteEquiment(equipment: Equipment) {
    // url of api endpoint
    const url = URL_SERVICES + "equipment/delete";
    // needed config
    const headers = this.authService.getAuthHeader();
    const body = {
      id: equipment.id
    };
    const config = { headers: headers, body: body};
    // returning the petition
    return this.http.delete(url, config);
  }

   /*
   * @desc handles the petition to the backend API to get all category data
   */
  reqCategories() {
    // url of api endpoint
    const url = URL_SERVICES + "equipmentCategory";
    // needed config
    const headers = this.authService.getAuthHeader();
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

  /*
   * @desc handles the petition to the backend API to create a new category
   */
  createCategory(category: EquipmentCategory) {
    // url of api endpoint
    const url = URL_SERVICES + "equipmentCategory/create";
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
  updateCategory(category: EquipmentCategory) {
    // url of api endpoint
    const url = URL_SERVICES + "equipmentCategory/update";
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
  deleteCategory(category: EquipmentCategory) {
    // url of api endpoint
    const url = URL_SERVICES + "equipmentCategory/delete";
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
