import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../interfaces/student';
import { Pensum } from '../interfaces/pensum';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'https://localhost:44304/api';

  constructor(private httpClient: HttpClient) {}

  getStudentData(studentId: string): Observable<Student> {
    const url = `${this.baseUrl}/Students/${studentId}`;
    return this.httpClient.get<Student>(url);
  }

  getPensums(): Observable<Pensum[]> {

    const id = localStorage.getItem('emailOrID');

    const url = `${this.baseUrl}/Subjects/student/${id}`; // Ajusta la URL según tu API

    console.log(url);
    return this.httpClient.get<Pensum[]>(url);
  }
}
