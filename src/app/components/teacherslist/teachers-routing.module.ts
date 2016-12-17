import { TeacherComponent } from './../teacher/teacher.component';
import { Course } from './../../core/models/class.courses';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherslistComponent } from './teacherslist.component';

const routes: Routes = [
  { path: '', component: TeacherslistComponent },
  { path: 'Teachers/:id:', component: TeacherComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachersListRoutingModule { }

export const routedComponents = [TeacherslistComponent];