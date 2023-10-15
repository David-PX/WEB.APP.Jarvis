import { FormGroup } from "@angular/forms";

export class ValidationHelper {
    getFieldError(form: FormGroup, field: string): string | null {
        if (form.controls[field]) return null;
    
        const errors = form.controls[field].errors || {};
    
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