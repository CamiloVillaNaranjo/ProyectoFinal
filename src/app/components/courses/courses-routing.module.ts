import { CourseComponent } from './course/course.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseslistComponent } from './courseslist.component';

const routes: Routes = [
  { path: '', component: CourseslistComponent },
  { path: 'Courses/:id:', component: CourseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesListRoutingModule { }