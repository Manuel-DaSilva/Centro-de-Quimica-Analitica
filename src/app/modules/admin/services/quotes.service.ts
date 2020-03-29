import { Injectable } from '@angular/core';
import { URL_SERVICES } from 'src/app/config/config';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Quote } from '../../../models/quotes.interface';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  
  

  /*
   * @desc handles the petition to the backend API to get all quotes
   */
  reqQuotes(page: number = 1) {
    // url of api endpoint
    const url = URL_SERVICES + "quotes/" + page;
    // needed config
    const headers = this.authService.getAuthHeader();
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

  updateReaded(quote: Quote){
    const body = {
      id: quote.id
    };
    console.log(quote);
    
     // url of api endpoint
     const url = URL_SERVICES + "quotes/setReaded";
     // needed config
     const headers = this.authService.getAuthHeader();
     const config = { headers: headers };
     // returning the petition
     return this.http.put(url,body,config);
  }

}
