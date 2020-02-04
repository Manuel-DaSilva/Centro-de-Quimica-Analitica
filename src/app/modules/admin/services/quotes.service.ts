import { Injectable } from '@angular/core';
import { URL_SERVICES } from 'src/app/config/config';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  constructor(private http: HttpClient) { }

  
  /*
   * @desc handles the petition to the backend API to get all quotes
   */
  reqQuotes() {
    // url of api endpoint
    const url = URL_SERVICES + "cotizaciones";
    // needed config
    const headers = new HttpHeaders({"Content-Type":"application/json"});
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

}
