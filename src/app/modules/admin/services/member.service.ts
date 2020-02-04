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
    const url = URL_SERVICES + "miembros";
    // needed config
    const headers = new HttpHeaders({"Content-Type":"application/json"});
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

  /*
   * @desc handles the petition to the backend API to create a new Member
   */
  createMember(member: Member, image, cv) {
    // url of api endpoint
    const url = URL_SERVICES + "miembros/nuevo";
    // needed config
    const headers = new HttpHeaders({"Content-Type":"application/json"});
    const config = { headers: headers };
    const body = {
      name: member.name,
      email: member.email,
      phonenumber: member.phonenumber,
      position: member.position,
      cv: "test",
      image: "test"
    };
    // returning the petition
    return this.http.post(url, body, config);
  }

  /*
   * @desc handles the petition to the backend API to update a member
   */
  updateMember(member: Member, image, cv) {
    // url of api endpoint
    const url = URL_SERVICES + "miembros/editar";
    // needed config
    const headers = new HttpHeaders({"Content-Type":"application/json"});
    const config = { headers: headers };
    const body = {
      id: member.id,
      name: member.name,
      email: member.email,
      phonenumber: member.phonenumber,
      position: member.position,
      cv: "test",
      image: "test"
    };
    // returning the petition
    return this.http.post(url, body, config);
  }

  /*
   * @desc handles the petition to the backend API to delete a member
   */
  deleteMember(member: Member) {
    // url of api endpoint
    const url = URL_SERVICES + "miembros/borrar";
    // needed config
    const headers = new HttpHeaders({"Content-Type":"application/json"});
    const config = { headers: headers };
    const body = {
      id: member.id
    };
    // returning the petition
    return this.http.post(url, body, config);
  }
}
