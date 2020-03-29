import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { URL_SERVICES } from "../../../config/config";
import { User } from '../../../models/user.interface';
@Injectable({
  providedIn: "root"
})
export class AuthService {
  private user: User;
  private token: string;
  private userLogged = false;

  constructor(private http: HttpClient) {
  }

  /*
   * @desc send user data to get authenticated
   * @param email - user email
   * @param password  - user password
   */
  login(email, password) {
    // url of api endpoint
    const url = URL_SERVICES + "auth/login";
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
    this.token = user.token;
    this.userLogged = true;
  }

  logout() {
    this.user = null;
    this.userLogged = false;
  }

  isUserLogged() {
    return this.userLogged;
  }

  getAuthHeader(){
    const headers = new HttpHeaders({
      'authorization': this.token
    });

    return headers;
  }
}
