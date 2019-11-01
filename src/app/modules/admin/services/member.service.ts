import { Injectable } from '@angular/core';
import { URL_SERVICES } from 'src/app/config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Member } from 'src/app/models/member.interface';
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }
  
  /*
   * @desc handles the petition to the backend API to get all member data
   */
  reqMembers() {
    // url of api endpoint
    const url = URL_SERVICES + "api/url/memberes";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

  /*
   * @desc handles the petition to the backend API to create a new Member
   */
  createMember(member: Member, image, cv) {
    // url of api endpoint
    const url = URL_SERVICES + "api/new/member";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    const body = {
      name: member.name,
      email: member.email,
      phone: member.phone,
      position: member.position,
      cv: cv,
      image: image
    };
    // returning the petition
    return this.http.post(url, body, config);
  }

  /*
   * @desc handles the petition to the backend API to update a member
   */
  updateMember(member: Member, image, cv) {
    // url of api endpoint
    const url = URL_SERVICES + "api/update/member";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    const body = {
      id: member.id,
      name: member.name,
      email: member.email,
      phone: member.phone,
      position: member.position,
      cv: cv,
      image: image
    };
    // returning the petition
    return this.http.post(url, body, config);
  }

  /*
   * @desc handles the petition to the backend API to delete a member
   */
  deleteMember(member: Member) {
    // url of api endpoint
    const url = URL_SERVICES + "api/delete/member";
    // needed config
    const headers = new HttpHeaders({});
    const config = { headers: headers };
    const body = {
      id: member.id
    };
    // returning the petition
    return this.http.post(url, body, config);
  }
}
