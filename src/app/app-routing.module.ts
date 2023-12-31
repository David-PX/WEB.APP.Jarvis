import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path:'enrollments',
    loadChildren: () => import('./enrollments/enrollments.module').then((m) => m.EnrollmentsModule),
  },
  {
    path:'students',
    loadChildren: () => import('./students/students.module').then((m) => m.StudentsModule),
  },
  {
    path:'**',
    redirectTo:'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
