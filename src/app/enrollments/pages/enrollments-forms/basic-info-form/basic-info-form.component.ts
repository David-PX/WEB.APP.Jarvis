import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BasicInfo } from 'src/app/enrollments/interfaces/BasicInfo';
import { EnrollmentService } from 'src/app/enrollments/services/enrollment.service';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

declare var Swal: any;

@Component({
  templateUrl: './basic-info-form.component.html',
  styleUrls: ['./basic-info-form.component.scss']
})
export class BasicInfoFormComponent implements OnInit{

  basicInfoForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required], readonly: true,
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    birthDate: ['', Validators.required],
    gender: ['', Validators.required],
    identificationNumber: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    mobileNumber: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, 
    private enrollmentService: EnrollmentService,
    private _validatorsService: ValidatorsService) {}

  ngOnInit() {
    this.basicInfoForm.get('email')!.setValue(this.enrollmentService.enrollmentEmail); // Establece el valor del campo email
  }

  onSubmit() {
    if (this.basicInfoForm.invalid) {
      this.basicInfoForm.markAllAsTouched();
      return;
    }

    console.log("")
    // if (this.basicInfoForm.valid) {
      const formData: BasicInfo = this.basicInfoForm.value;
      this.enrollmentService.postBasicInfo(formData).subscribe(
        (response: BasicInfo) => {
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
          // Maneja los errores de la petición
          console.error('Error:', error);
        }
      );
    }
  // }

  isValidField(field: string) {
    return this._validatorsService.isValidField(this.basicInfoForm, field);
  }

  getFieldError(field: string): string | null {
    if (!this.basicInfoForm.controls[field]) return null;

    const errors = this.basicInfoForm.controls[field].errors || {};

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

  // onSubmit() {
   
  // }
}
