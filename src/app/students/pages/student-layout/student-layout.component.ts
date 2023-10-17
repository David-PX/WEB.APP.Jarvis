import { Component, OnInit } from '@angular/core';
import { Student } from '../../interfaces/student';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './student-layout.component.html',
  styleUrls: ['./student-layout.component.scss']
})
export class StudentLayoutComponent implements OnInit {

     userName: string = "Estudiante";
     student: Student | undefined;
  
     constructor(private studentService: StudentService, private router: Router) {}

    ngOnInit(): void {
      if(localStorage.getItem('token') == null){
        this.router.navigate(['/auth/login'])
      }


      const studentId = localStorage.getItem('emailOrID')!;
      this.studentService.getStudentData(studentId).subscribe((data: Student) => {
        this.student = data;
        this.userName = data.enrollment.name + " " + data.enrollment.lastName
      });
    }

    
    LogOut(){
      localStorage.removeItem('token');
      localStorage.removeItem('emailOrID');
      this.router.navigate(['/auth/login']);
    }
   
}
