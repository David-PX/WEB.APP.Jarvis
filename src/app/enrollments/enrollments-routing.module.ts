import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEnrrolmentComponent } from './pages/create-enrrolment/create-enrrolment.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'create',
        component:CreateEnrrolmentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrollmentsRoutingModule { }
