import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { URL_SERVICES } from 'src/app/config/config';
// models
import { Category } from 'src/app/models/equipment.category.interface';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {}

  /*
   * @desc handles the petition to the backend API to get all category data
   */
  reqCategories() {
    // url of api endpoint
    const url = URL_SERVICES + "categorias";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

  /*
   * @desc handles the petition to the backend API to create a new category
   */
  createCategory(category: Category) {
    // url of api endpoint
    const url = URL_SERVICES + "categorias/nuevo";
    // needed config
    const headers = new HttpHeaders({"Content-Type":"application/json"});
    const config = { headers: headers };
    const body = {
      name: category.name,
    };
    // returning the petition
    return this.http.post(url, body, config);
  }

  /*
   * @desc handles the petition to the backend API to update category
   */
  updateCategory(category: Category) {
    console.log('on update : ', category);
    // url of api endpoint
    const url = URL_SERVICES + "categorias/editar";
    // needed config
    const headers = new HttpHeaders({"Content-Type":"application/json"});
    const config = { headers: headers };
    const body = {
      id: category.id,
      name: category.name,
    };
    // returning the petition
    return this.http.post(url, body, config);
  }

  /*
   * @desc handles the petition to the backend API to delete a category
   */
  deleteCategory(category: Category) {
    // url of api endpoint
    const url = URL_SERVICES + "categorias/borrar";
    // needed config
    const headers = new HttpHeaders({"Content-Type":"application/json"});
    const config = { headers: headers };
    const body = {
      id: category.id
    };
    // returning the petition
    return this.http.post(url, body, config);
  }
}
