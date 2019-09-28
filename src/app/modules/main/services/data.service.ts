import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  /*
   * @desc handles the petition to the backend API to get all instrumentes avaliables
   */
  reqInstruments() {
    // url of api endpoint
    const url = "api/ulr/instruments";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

  /*
   * @desc handles the petition to the backend API to get all equipment avaliable
   */
  reqEquipment() {
    // url of api endpoint
    const url = "api/ulr/equipment";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

  /*
   * @desc handles the petition to the backend API to get all investigations data
   */
  reqInvestigations() {
    // url of api endpoint
    const url = "api/ulr/investigations";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

  /*
   * @desc handles the petition to the backend API to get all laboratories data
   */
  reqLaboratories() {
    // url of api endpoint
    const url = "api/ulr/laboratories";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

  /*
   * @desc handles the petition to the backend API to get all services data
   */
  reqServices() {
    // url of api endpoint
    const url = "api/ulr/services";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

  /*
   * @desc sends the petition to the backend API to create a new info quote
   */
  sendInfoQuote(serviceData, companyData) {
    // url of api endpoint
    const url = "api/new/infoQuote";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    const body = {};
    // returning the petition
    return this.http.post(url, body, config);
  }
  /*
   * @desc sends the petition to the backend API to create a new service quote
   */
  sendServiceQuote(infoData, companyData) {
    // url of api endpoint
    const url = "api/new/infoQuote";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    const body = {};
    // returning the petition
    return this.http.post(url, body, config);
  }
}
