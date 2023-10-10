import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


declare var Swal: any;


@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  showSentMessageConfirmationMessage : boolean = false;

  constructor(
    private fb: FormBuilder,
    private _validatorsService: ValidatorsService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // if(localStorage.getItem('token') != null){
    //   this.router.navigate([''])
    // }
  }


  public registerForm: FormGroup = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
    }
  );


  onSave(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.Register(
      this.registerForm.get('email')?.value,
    );

    this.registerForm.reset({ email: '' });
  }

  isValidField(field: string) {
    return this._validatorsService.isValidField(this.registerForm, field);
  }

  getFieldError(field: string): string | null {
    if (!this.registerForm.controls[field]) return null;

    const errors = this.registerForm.controls[field].errors || {};

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


  Register(
    email: string,
  ): void {
    this.authService
      .sendEmail(email)
      .subscribe(
        (response: any) => {
            this.showSentMessageConfirmationMessage = true;
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Envio de Email Fallido',
            text: error.error.message,
          });
          // Maneja los errores en caso de fallo en el inicio de sesión
          console.error(error);
        }
      );
  }
}
