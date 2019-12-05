import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { URL_SERVICES } from "../../../config/config";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  private user;
  private userLogged = false;

  constructor(private http: HttpClient) {
    // !test
    this.userLogged = false;
    // !test
  }

  /*
   * @desc send user data to get authenticated
   * @param email - user email
   * @param password  - user password
   */
  login(email, password) {
    // url of api endpoint
    const url = URL_SERVICES + "login";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    const body = {
      email: email,
      password: password
    };
    // returning the petition
    return this.http.post(url, body, config);
  }

  setUser(user) {
    this.user = user;
    this.userLogged = true;
  }

  logout() {
    this.user = null;
    this.userLogged = false;
  }

  isUserLogged() {
    return this.userLogged;
  }


  getSummary(){
    // url of api endpoint
    const url = URL_SERVICES + "api/summary";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    
    // returning the petition
    return this.http.get(url, config);
  }
}
