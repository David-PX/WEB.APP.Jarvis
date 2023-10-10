import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollmentsRoutingModule } from './enrollments-routing.module';
import { CreateEnrrolmentComponent } from './pages/create-enrrolment/create-enrrolment.component';


@NgModule({
  declarations: [
    CreateEnrrolmentComponent
  ],
  imports: [
    CommonModule,
    EnrollmentsRoutingModule
  ]
})
export class EnrollmentsModule { }
