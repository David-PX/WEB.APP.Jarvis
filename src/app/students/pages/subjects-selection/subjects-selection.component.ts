import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './subjects-selection.component.html',
  styleUrls: ['./subjects-selection.component.scss']
})
export class SubjectsSelectionComponent implements OnInit {
  constructor(private studentService: StudentService, private router: Router) {}


  ngOnInit(): void {
    if(localStorage.getItem('token') == null){
      this.router.navigate(['/auth/login'])
        }    
      }
}
