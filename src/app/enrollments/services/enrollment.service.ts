import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicInfo } from '../interfaces/BasicInfo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private apiUrl = 'https://localhost:44304/api'; 


  private _enrollmentEmail: string = "";

  public get enrollmentEmail(): string {
    return this._enrollmentEmail;
  }
  
  public set enrollmentEmail(value: string) {
    this._enrollmentEmail = value;
  }


  constructor(private http: HttpClient) { }


  postBasicInfo(data: BasicInfo): Observable<BasicInfo> {
    return this.http.post<BasicInfo>(`${this.apiUrl}/Enrollments`, data);
  }
}
