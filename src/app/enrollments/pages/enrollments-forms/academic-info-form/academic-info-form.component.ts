import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AcademicInfo } from 'src/app/enrollments/interfaces/AcademicInfo';
import { Career } from 'src/app/enrollments/interfaces/Career';
import { EnrollmentService } from 'src/app/enrollments/services/enrollment.service';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

declare var Swal: any;

@Component({
  templateUrl: './academic-info-form.component.html',
  styleUrls: ['./academic-info-form.component.scss']
})
export class AcademicInfoFormComponent {

  academicInfoForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required], readonly: true,
    careerId: ['', Validators.required],
    school: ['', Validators.required],
    candidateType: ['', Validators.required],
    academicLevel: ['', Validators.required]
  });

  careers: Career[] = [];

  constructor(private enrollmentService: EnrollmentService, private formBuilder: FormBuilder, private _validatorsService: ValidatorsService) {}

  ngOnInit() {
    this.enrollmentService.getCareers().subscribe(data => {
      this.careers = data;
    });

    this.academicInfoForm.get('email')!.setValue(this.enrollmentService.enrollmentEmail); // Establece el valor del campo email
  }

  onSubmit(){
    if (this.academicInfoForm.invalid) {
      this.academicInfoForm.markAllAsTouched();
      return;
    }


    const academicInfo: AcademicInfo = this.academicInfoForm.value;
    console.log(academicInfo);
    this.enrollmentService.postAcademicInfo(academicInfo).subscribe(
      (response: AcademicInfo) => {
      Swal.fire({
        icon: 'success',
        title: 'Registro Exitoso',
        text: `Se ha guardado tu proceso`,
      });
      // .then(() => {
      //   localStorage.setItem('id', response.id);
      //   localStorage.setItem('userName', response.names);
      //   localStorage.setItem('userLastName', response.lastnames);
      //   localStorage.setItem('email', email);
      //   localStorage.setItem('phoneNumber', response.phoneNumber);
      //   localStorage.setItem('token', response.token);
      //   this.router.navigate(['/customer-site/main']);
      // });
      console.log('Respuesta del servidor:', response);
    },
    (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Registro Erroneo',
        text: `Ha ocurrido un error`,
      });
      console.error('Error:', error);
    });
  }

  isValidField(field: string) {
    return this._validatorsService.isValidField(this.academicInfoForm, field);
  }

  getFieldError(field: string): string | null {
    if (!this.academicInfoForm.controls[field]) return null;

    const errors = this.academicInfoForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Minimo ${errors['minlength'].requiredLength} caracteres`;

        case 'email':
          return `Correo Electronico Invalido`;
      }
    }
    return null;
  }
}
