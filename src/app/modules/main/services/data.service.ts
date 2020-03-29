import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { URL_SERVICES } from "src/app/config/config";
import { Service } from 'src/app/models/service.interface';

@Injectable({
  providedIn: "root"
})
export class DataService {

  public activeService;

  constructor(private http: HttpClient) {}

  /*
   * @desc handles the petition to the backend API to get all members
   */
  reqMembers() {
    // url of api endpoint
    const url = URL_SERVICES + "members";
    // needed config
    const headers = new HttpHeaders();
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

  /*
   * @desc handles the petition to the backend API to get all equipment avaliable
   */
  reqEquipment() {
    // url of api endpoint
    const url = URL_SERVICES + "equipment";
    // needed config
    const headers = new HttpHeaders();
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

  /*
   * @desc handles the petition to the backend API to get all investigations data
   */
  reqInvestigations() {
    // url of api endpoint
    const url = URL_SERVICES + "investigations";
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
    const url = URL_SERVICES + "services";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

 
  /*
   * @desc sends the petition to the backend API to create a new service quote
   */
  sendQuote(quoteData) {
    // url of api endpoint
    const url = URL_SERVICES + "quotes/create";
    // needed config
    const headers = new HttpHeaders({
      // 'Content-Type':'application/x-www-form-urlencoded'
    });
    const config = { headers: headers };
    const body = quoteData;
    // returning the petition
    console.log(body);
    
    return this.http.post(url, quoteData, config);
  }

  setActiveService(service: Service){
    this.activeService = service;
  }

  getActiveService(){
    return this.activeService;
  }

}
