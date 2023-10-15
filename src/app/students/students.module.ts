import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StudentLayoutComponent } from './pages/student-layout/student-layout.component';
import { PensumReportComponent } from './pages/reports/pensum-report/pensum-report.component';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';
import { SubjectsSelectionComponent } from './pages/subjects-selection/subjects-selection.component';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    StudentLayoutComponent,
    PensumReportComponent,
    StudentDashboardComponent,
    SubjectsSelectionComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
