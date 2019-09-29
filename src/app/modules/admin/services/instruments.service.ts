import { Injectable } from "@angular/core";
import { URL_SERVICES } from "src/app/config/config";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class InstrumentsService {
  constructor(private http: HttpClient) {}

  /*
   * @desc handles the petition to the backend API to get all instrument data
   */
  reqInstruments() {
    // url of api endpoint
    const url = URL_SERVICES + "api/url/instrument";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

  /*
   * @desc handles the petition to the backend API to create a new instrument
   */
  createInstrument(instrument) {
    // url of api endpoint
    const url = URL_SERVICES + "api/new/instrument";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    const body = {
      name: instrument.name,
      description: instrument.description
    };
    // returning the petition
    return this.http.post(url, body, config);
  }

  /*
   * @desc handles the petition to the backend API to update instrument
   */
  updateInstrument(instrument) {
    // url of api endpoint
    const url = URL_SERVICES + "api/update/instrument";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    const body = {
      id: instrument.id,
      name: instrument.name,
      description: instrument.description
    };
    // returning the petition
    return this.http.post(url, body, config);
  }

  /*
   * @desc handles the petition to the backend API to delete instrument
   */
  deleteInstrument(instrument) {
    // url of api endpoint
    const url = URL_SERVICES + "api/delete/instrument";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    const body = {
      id: instrument.id
    };
    // returning the petition
    return this.http.post(url, body, config);
  }
}
