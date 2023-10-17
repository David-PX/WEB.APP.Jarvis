import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../interfaces/student';
import { Pensum } from '../interfaces/pensum';
import { Section, Teacher, selectionSubject } from '../interfaces/section';

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

    // Realiza una solicitud GET para obtener los datos de profesores, asignaturas y secciones.
    getUniversityData(): Observable<any> {
      const url = `${this.baseUrl}/Sections`; // Reemplaza con la ruta real de tu API
      return this.httpClient.get<any>(url);
    }
  
    // Realiza una solicitud POST para seleccionar una materia por parte de un estudiante.
    selectSubject(studentId: string, sectionId: string): Observable<any> {
      const url = `${this.baseUrl}/sectionstudents`; // Reemplaza con la ruta real de tu API
      const payload = { SectionId: sectionId, StudentId: studentId  };
      return this.httpClient.post(url, payload);
    }


}
