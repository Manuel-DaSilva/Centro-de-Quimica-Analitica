import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { URL_SERVICES } from "src/app/config/config";

// models
import { Equipment } from 'src/app/models/equipment.interface';

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
   * @desc handles the petition to the backend API to create a new equipment
   */
  createEquiment(equipment: Equipment) {
    // url of api endpoint
    const url = URL_SERVICES + "equipos/nuevo";
    // needed config
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    const config = { headers: headers };
    const body = {
      name: equipment.name,
    };
    // returning the petition
    return this.http.post(url, body, config);
  }

  /*
   * @desc handles the petition to the backend API to update equipment
   */
  updateEquiment(equipment: Equipment) {
    // url of api endpoint
    const url = URL_SERVICES + "equipos/editar";
    // needed config
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    const config = { headers: headers };
    const body = {
      id: equipment.id,
      name: equipment.name,
    };
    // returning the petition
    return this.http.post(url, body, config);
  }

  /*
   * @desc handles the petition to the backend API to delete laboratory
   */
  deleteEquiment(equipment: Equipment) {
    // url of api endpoint
    const url = URL_SERVICES + "equipos/borrar";
    // needed config
    const headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    const config = { headers: headers };
    const body = {
      id: equipment.id
    };
    // returning the petition
    return this.http.post(url, body, config);
  }
}
