import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'https://localhost:44304/api/Students/';

  constructor(private httpClient: HttpClient) {}

  getStudentData(studentId: string): Observable<Student> {
    const url = `${this.baseUrl}${studentId}`;
    return this.httpClient.get<Student>(url);
  }
}
