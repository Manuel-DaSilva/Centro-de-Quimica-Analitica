import { Injectable } from "@angular/core";
import { URL_SERVICES } from "src/app/config/config";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class EquipmentService {
  constructor(private http: HttpClient) {}

  /*
   * @desc handles the petition to the backend API to get all equipment data
   */
  reqEquiments() {
    // url of api endpoint
    const url = URL_SERVICES + "api/url/equipments";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

  /*
   * @desc handles the petition to the backend API to create a new equipment
   */
  createEquiment(equipment) {
    // url of api endpoint
    const url = URL_SERVICES + "api/new/equipment";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    const body = {
      name: equipment.name,
      description: equipment.description
    };
    // returning the petition
    return this.http.post(url, body, config);
  }

  /*
   * @desc handles the petition to the backend API to update equipment
   */
  updateEquiment(equipment) {
    // url of api endpoint
    const url = URL_SERVICES + "api/update/equipment";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    const body = {
      id: equipment.id,
      name: equipment.name,
      description: equipment.description
    };
    // returning the petition
    return this.http.post(url, body, config);
  }

  /*
   * @desc handles the petition to the backend API to delete laboratory
   */
  deleteEquiment(equipment) {
    // url of api endpoint
    const url = URL_SERVICES + "api/delete/equipment";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    const body = {
      id: equipment.id
    };
    // returning the petition
    return this.http.post(url, body, config);
  }
}
