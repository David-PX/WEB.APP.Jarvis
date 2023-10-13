import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollmentsRoutingModule } from './enrollments-routing.module';
import { CreateEnrrolmentComponent } from './pages/create-enrrolment/create-enrrolment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BasicInfoFormComponent } from './pages/enrollments-forms/basic-info-form/basic-info-form.component';
import { ContactInfoFormComponent } from './pages/enrollments-forms/contact-info-form/contact-info-form.component';
import { AcademicInfoFormComponent } from './pages/enrollments-forms/academic-info-form/academic-info-form.component';
import { DocumentFormComponent } from './pages/enrollments-forms/document-form/document-form.component';


@NgModule({
  declarations: [
    CreateEnrrolmentComponent,
    BasicInfoFormComponent,
    ContactInfoFormComponent,
    AcademicInfoFormComponent,
    DocumentFormComponent
  ],
  imports: [
    CommonModule,
    EnrollmentsRoutingModule,
    ReactiveFormsModule
  ]
})
export class EnrollmentsModule { }
