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
    // Expresión regular para verificar si `username` es un correo electrónico
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    let body = null;

    if (emailRegex.test(username)) {
      // `username` parece ser un correo electrónico
      body =  {
        email: username,
        password: password
      };
    } else {
      // `username` parece ser un nombre de usuario
      body =  {
        id: username,
        password: password
      };
    }
    return this.http.post(`${this.apiUrl}/Authentication/login/student`, body);
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
