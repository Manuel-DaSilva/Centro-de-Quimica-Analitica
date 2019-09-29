import { Injectable } from "@angular/core";
import { URL_SERVICES } from "src/app/config/config";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class InvestigationsService {
  constructor(private http: HttpClient) {}

  /*
   * @desc handles the petition to the backend API to get all investigations data
   */
  reqInvestigations() {
    // url of api endpoint
    const url = URL_SERVICES + "api/url/investigations";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

  /*
   * @desc handles the petition to the backend API to create a new instrument
   */
  createInvestigation(investigation) {
    // url of api endpoint
    const url = URL_SERVICES + "api/new/investigation";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    const body = {
      name: investigation.name,
      description: investigation.description,
      members: investigation.members
    };
    // returning the petition
    return this.http.post(url, body, config);
  }

  /*
   * @desc handles the petition to the backend API to update investigation
   */
  updateInvestigation(investigation) {
    // url of api endpoint
    const url = URL_SERVICES + "api/update/investigation";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    const body = {
      id: investigation.id,
      name: investigation.name,
      description: investigation.description,
      members: investigation.members
    };
    // returning the petition
    return this.http.post(url, body, config);
  }

  /*
   * @desc handles the petition to the backend API to delete investigation
   */
  deleteInvestigation(investigation) {
    // url of api endpoint
    const url = URL_SERVICES + "api/delete/investigation";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    const body = {
      id: investigation.id
    };
    // returning the petition
    return this.http.post(url, body, config);
  }
}
