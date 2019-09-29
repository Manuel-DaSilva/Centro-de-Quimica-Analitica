import { Injectable } from "@angular/core";
import { URL_SERVICES } from "src/app/config/config";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LaboratoriesService {
  constructor(private http: HttpClient) {}

  /*
   * @desc handles the petition to the backend API to get all laboratories data
   */
  reqLab() {
    // url of api endpoint
    const url = URL_SERVICES + "api/url/laboratories";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

  /*
   * @desc handles the petition to the backend API to create a new laboratory
   */
  createLab(lab) {
    // url of api endpoint
    const url = URL_SERVICES + "api/new/laboratory";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    const body = {
      name: lab.name,
      description: lab.description
    };
    // returning the petition
    return this.http.post(url, body, config);
  }

  /*
   * @desc handles the petition to the backend API to update laboratory
   */
  updateLab(lab) {
    // url of api endpoint
    const url = URL_SERVICES + "api/update/laboratory";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    const body = {
      id: lab.id,
      name: lab.name,
      description: lab.description
    };
    // returning the petition
    return this.http.post(url, body, config);
  }

  /*
   * @desc handles the petition to the backend API to delete laboratory
   */
  deleteLab(lab) {
    // url of api endpoint
    const url = URL_SERVICES + "api/delete/laboratory";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    const body = {
      id: lab.id
    };
    // returning the petition
    return this.http.post(url, body, config);
  }
}
