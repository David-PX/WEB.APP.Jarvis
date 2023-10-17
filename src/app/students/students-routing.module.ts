import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentLayoutComponent } from './pages/student-layout/student-layout.component';
import { PensumReportComponent } from './pages/reports/pensum-report/pensum-report.component';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';
import { SubjectsSelectionComponent } from './pages/subjects-selection/subjects-selection.component';

const routes: Routes = [
  {
    path:'',
    component:StudentLayoutComponent,
    children: [
      {
        path:'dashboard',
        component:StudentDashboardComponent
      },
      {
        path:'report/pensum',
        component:PensumReportComponent
      },
      {
        path:'selection',
        component:SubjectsSelectionComponent
      },
      {
        path:'**',
        redirectTo:'dashboard'
      }
    ]
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
