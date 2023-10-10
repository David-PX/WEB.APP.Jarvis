import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://localhost:44304/api'; 

  // private resetPasswordUrl = 'https://localhost:7137/api/Authentication/resetpassword/';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const body = { Email: username, Password: password };
    return this.http.post(`${this.apiUrl}/Authentication/login`, body);
  }

  sendEmail(email: string): Observable<any> {
    const url = `${this.apiUrl}/Enrollments/EnrollmentRequest/${email}`;
    return this.http.get(url);
  }

  // register(
  //   name: string,
  //   lastname: string,
  //   phoneNumber: string,
  //   email: string,
  //   password: string
  // ) {
  //   const body = {
  //     names: name,
  //     lastNames: lastname,
  //     phoneNumber: phoneNumber,
  //     email: email,
  //     password: password,
  //   };
  //   return this.http.post(this.registerUrl, body);
  // }
}
