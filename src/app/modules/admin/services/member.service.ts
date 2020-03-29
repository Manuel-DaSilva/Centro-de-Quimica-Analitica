import { Injectable } from '@angular/core';
import { URL_SERVICES } from 'src/app/config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Member } from 'src/app/models/member.interface';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient, private authService: AuthService) { }
  
  /*
   * @desc handles the petition to the backend API to get all member data
   */
  reqMembers() {
    // url of api endpoint
    const url = URL_SERVICES + "members";
    // needed config
    const headers = this.authService.getAuthHeader();
    const config = { headers: headers };
    // returning the petition
    return this.http.get(url, config);
  }

  /*
   * @desc handles the petition to the backend API to create a new Member
   */
  createMember(member: Member, image: File, cv: File) {
    // url of api endpoint
    const url = URL_SERVICES + "members/create";
    

    // handles the promise
    return new Promise((resolve, reject) => {
      let formData = new FormData();
      let xhr = new XMLHttpRequest();

      // creating the formData for the file
      formData.append("files", image);
      formData.append("files", cv);
      formData.append("name", member.name);
      formData.append("position", member.position);
      formData.append("email", member.email);
      formData.append("phone", member.phone);

      xhr.open("POST", url, true);
      xhr.setRequestHeader('authorization',this.authService.getToken());
      // petition
      xhr.onreadystatechange = function() {
        // console.log(xhr.readyState);
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };
      
      
      // sending request
      xhr.send(formData);
    });
  }

  /*
   * @desc handles the petition to the backend API to update a member
   */
  updateMember(member: Member) {
    // url of api endpoint
    const url = URL_SERVICES + "members/update";
    // needed config
    const headers = this.authService.getAuthHeader();
    const config = { headers: headers };
    const body = {
      id: member.id,
      name: member.name,
      position: member.position,
      email: member.email,
      phone: member.phone,
    };
    // returning the petition
    return this.http.put(url, body, config);
  }

  /*
   * @desc handles the petition to the backend API to delete a member
   */
  deleteMember(member: Member) {
    // url of api endpoint
    const url = URL_SERVICES + "members/delete";
    // needed config
    const headers = this.authService.getAuthHeader();
    const body = {
      id: member.id
    };
    const config = { headers: headers, body: body };
    // returning the petition
    return this.http.delete(url, config);
  }

  /*
   * @desc handles the petition to the backend API to edit cv
   */
  updateCV(member: Member, cv: File) {
    // url of api endpoint
    const url = URL_SERVICES + "members/updateCV/" + member.id;
    

    // handles the promise
    return new Promise((resolve, reject) => {
      let formData = new FormData();
      let xhr = new XMLHttpRequest();

      // creating the formData for the file
      formData.append("cv", cv);

      xhr.open("POST", url, true);
      xhr.setRequestHeader('authorization',this.authService.getToken());
      // petition
      xhr.onreadystatechange = function() {
        // console.log(xhr.readyState);
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };
      
      
      // sending request
      xhr.send(formData);
    });
  }

  /*
   * @desc handles the petition to the backend API to edit cv
   */
  updateImage(member: Member, image: File) {
    // url of api endpoint
    const url = URL_SERVICES + "members/updateImage/" + member.id;
    

    // handles the promise
    return new Promise((resolve, reject) => {
      let formData = new FormData();
      let xhr = new XMLHttpRequest();

      // creating the formData for the file
      formData.append("image", image);

      xhr.open("POST", url, true);
      xhr.setRequestHeader('authorization',this.authService.getToken());
      // petition
      xhr.onreadystatechange = function() {
        // console.log(xhr.readyState);
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };
      
      
      // sending request
      xhr.send(formData);
    });
  }
}
