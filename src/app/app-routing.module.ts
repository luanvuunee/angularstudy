import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path: '', component: DasboardComponent},
  {path: 'dashboard', component: DasboardComponent},
  // {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'students', component:StudentsComponent},
  {path: 'student-form', component:StudentFormComponent},
  // {path: 'login', component:LoginFormComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
