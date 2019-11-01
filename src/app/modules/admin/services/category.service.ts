import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { URL_SERVICES } from 'src/app/config/config';
// models
import { Category } from 'src/app/models/category.interface';
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
    const url = URL_SERVICES + "api/url/categories";
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
    const url = URL_SERVICES + "api/new/category";
    // needed config
    const headers = new HttpHeaders({});
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
    // url of api endpoint
    const url = URL_SERVICES + "api/update/category";
    // needed config
    const headers = new HttpHeaders({});
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
    const url = URL_SERVICES + "api/delete/category";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    const body = {
      id: category.id
    };
    // returning the petition
    return this.http.post(url, body, config);
  }
}
