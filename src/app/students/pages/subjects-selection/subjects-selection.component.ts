import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';
import { Section, Teacher, selectionSubject } from '../../interfaces/section';
;


@Component({
  templateUrl: './subjects-selection.component.html',
  styleUrls: ['./subjects-selection.component.scss']
})
export class SubjectsSelectionComponent implements OnInit {
  

  all : any[] = [];


  constructor(private studentService: StudentService, private router: Router) {}


  ngOnInit(): void {
    if(localStorage.getItem('token') == null){
      this.router.navigate(['/auth/login'])
        }    

      // Realiza una solicitud GET para obtener los datos de profesores, asignaturas y secciones.
      this.studentService.getUniversityData().subscribe((data) => {
        console.log(data);
        this.all = data;
      });    
  }


  // getSubjectName(subjectId: string): string {
  //   const subject = this.all.find((s) => s.subjectId === subjectId);
  //   return subject ? subject.subjectName : '';
  // }
  
  // getTeacherName(teacherId: string): string {
  //   const teacher = this.all.find((t) => t.employeeId === teacherId);
  //   return teacher ? teacher.userId.fullName : '';
  // }
  
  onSelectSubject(sectionId: string, teacherId: string) {
  // Obtén el ID del estudiante desde el almacenamiento local (localStorage).
  const studentId = localStorage.getItem('emailOrID');
  localStorage.setItem('materia', sectionId);
  localStorage.setItem('profesor', teacherId);

  if (studentId) {
    // Realiza una solicitud POST para enviar la selección del estudiante.
    this.studentService.selectSubject(studentId, sectionId).subscribe((response) => {
      console.log(response);
    });
  }
}
      
     
}
