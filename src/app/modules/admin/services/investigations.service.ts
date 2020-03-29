import { Injectable } from "@angular/core";
import { URL_SERVICES } from "src/app/config/config";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from './auth.service';
import { Investigation } from '../../../models/investigation.interface';

@Injectable({
  providedIn: "root"
})
export class InvestigationsService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  /*
   * @desc handles the petition to the backend API to get all investigations data
   */
  reqInvestigations() {
    // url of api endpoint
    const url = URL_SERVICES + "investigations";
    // needed config
    const headers = this.authService.getAuthHeader();
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

  /*
   * @desc handles the petition to the backend API to create a new instrument
   */
  createInvestigation(investigation: Investigation) {
    // url of api endpoint
    const url = URL_SERVICES + "investigations/create";
    // needed config
    const headers = this.authService.getAuthHeader();
    const config = { headers: headers };
    const body = {
      title: investigation.title,
      description: investigation.description,
      memberId: investigation.member_id
    };
    // returning the petition
    return this.http.post(url, body, config);
  }

  /*
   * @desc handles the petition to the backend API to update investigation
   */
  updateInvestigation(investigation: Investigation) {
    // url of api endpoint
    const url = URL_SERVICES + "investigations/update";
    // needed config
    const headers = this.authService.getAuthHeader();
    const config = { headers: headers };
    const body = {
      id: investigation.id,
      title: investigation.title,
      description: investigation.description,
      memberId: investigation.member_id
    };
    // returning the petition
    return this.http.put(url, body, config);
  }

  /*
   * @desc handles the petition to the backend API to delete investigation
   */
  deleteInvestigation(investigation: Investigation) {
    // url of api endpoint
    const url = URL_SERVICES + "investigations/delete";
    // needed config
    const headers = this.authService.getAuthHeader();
    const body = {
      id: investigation.id
    };
    const config = { headers: headers, body: body };
    // returning the petition
    return this.http.delete(url, config);
  }
}
