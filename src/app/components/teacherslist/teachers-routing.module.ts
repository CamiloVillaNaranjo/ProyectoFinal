import { CourseComponent } from './../course/course.component';
import { Course } from './../../core/models/class.courses';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherslistComponent } from './teacherslist.component';

const routes: Routes = [
  { path: '', component: TeacherslistComponent },
  { path: 'Courses/:id:', component: CourseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachersListRoutingModule { }

export const routedComponents = [TeacherslistComponent];