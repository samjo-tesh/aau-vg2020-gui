import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'src/app/home/home.component';
import { PhdStudentsComponent } from 'src/app/phd-students/phd-students.component';
import { MscStudentsComponent } from 'src/app/msc-students/msc-students.component';

import { HomeNewComponent } from 'src/app/home-new/home-new.component';
import { PhdGraduatesComponent } from 'src/app/phd-graduates/phd-graduates.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'phd_students', component: PhdStudentsComponent },
  { path: 'msc_students', component: MscStudentsComponent },

  { path: 'new', component: HomeNewComponent},
  { path: 'new/phd_graduates', component: PhdGraduatesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
