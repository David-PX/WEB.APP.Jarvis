import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  subjectsSchedule = [];

  constructor(private studentService: StudentService, private router: Router) {}


  ngOnInit(): void {
    if(localStorage.getItem('token') == null){
      this.router.navigate(['/auth/login'])
        }    
      }


}
