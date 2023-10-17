import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pensum, PensumSubject, Subject } from 'src/app/students/interfaces/pensum';
import { StudentService } from 'src/app/students/services/student.service';

@Component({
  selector: 'app-pensum-report',
  templateUrl: './pensum-report.component.html',
  styleUrls: ['./pensum-report.component.scss']
})
export class PensumReportComponent implements OnInit {
  constructor(private studentService: StudentService, private router: Router) {}

  pensum: any[] = [];
  trimestres: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]; // Variable para almacenar los textos de los trimestres

  ngOnInit(): void {
    if(localStorage.getItem('token') == null){
      this.router.navigate(['/auth/login'])
    }
    
    this.studentService.getPensums().subscribe((data: Pensum[]) => {
      this.pensum = data;
      console.log(this.pensum);
    });

      
  }


}
