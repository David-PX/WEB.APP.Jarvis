import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicInfo } from '../interfaces/BasicInfo';
import { Observable } from 'rxjs';
import { Career } from '../interfaces/Career';
import { AcademicInfo } from '../interfaces/AcademicInfo';

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

  getCareers(): Observable<Career[]> {
    const url = `${this.apiUrl}/careers`; // Ajusta la URL según tu API
    return this.http.get<Career[]>(url);
  }

  postAcademicInfo(candidateData: AcademicInfo): Observable<any> {
    const url = `${this.apiUrl}/Enrollments/academicInfo`; // Ajusta la URL según tu API
    return this.http.post(url, candidateData);
  }
}
