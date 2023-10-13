import { Component } from '@angular/core';

declare var Swal: any;

@Component({
  templateUrl: './academic-info-form.component.html',
  styleUrls: ['./academic-info-form.component.scss']
})
export class AcademicInfoFormComponent {

  onSubmit(){
    Swal.fire({
      icon: 'success',
      title: 'Registro Exitoso',
      text: `Se ha guardado tu proceso`,
    });
  }
}
