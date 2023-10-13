import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEnrrolmentComponent } from './pages/create-enrrolment/create-enrrolment.component';
import { BasicInfoFormComponent } from './pages/enrollments-forms/basic-info-form/basic-info-form.component';
import { ContactInfoFormComponent } from './pages/enrollments-forms/contact-info-form/contact-info-form.component';
import { DocumentFormComponent } from './pages/enrollments-forms/document-form/document-form.component';
import { AcademicInfoFormComponent } from './pages/enrollments-forms/academic-info-form/academic-info-form.component';

const routes: Routes = [
  {
    path:'create/:email',
    children:[
      {
        path:'',
        component:CreateEnrrolmentComponent,
        children:[
          { path: '', redirectTo: 'basic-info', pathMatch: 'full' },
          { path: 'basic-info', component: BasicInfoFormComponent },
          { path: 'contact-info', component: ContactInfoFormComponent },
          { path: 'document-info', component: DocumentFormComponent },
          { path: 'academic-info', component: AcademicInfoFormComponent },
        ]
      },
      { path: '', redirectTo: '/enrollment-form', pathMatch: 'full' },
      { path: '**', redirectTo: '/enrollment-form' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrollmentsRoutingModule { }
