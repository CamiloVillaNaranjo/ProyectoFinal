import { TeacherComponent } from './teacher/teacher.component';
import { TeacherslistComponent } from './teacherslist.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: TeacherslistComponent },
  { path: 'Teachers/:id:', component: TeacherComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachersListRoutingModule { }