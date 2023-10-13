import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  templateUrl: './create-enrrolment.component.html',
  styleUrls: ['./create-enrrolment.component.scss']
})
export class CreateEnrrolmentComponent implements OnInit {

      constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private enrollmentService: EnrollmentService) {}

      ngOnInit() {
        this.route.paramMap.subscribe(params => {
          // console.log(params);
          const email = params.get('email');
          this.enrollmentService.enrollmentEmail = email!;
        });
      }

      

      onSubmit() {
       
      }
}
