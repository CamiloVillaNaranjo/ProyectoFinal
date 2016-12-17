import { TeacherComponent } from './components/teacher/teacher.component';
import { TeacherslistComponent } from './components/teacherslist/teacherslist.component';
import { CourseslistComponent } from './components/courseslist/courseslist.component';
import { CourseComponent } from './components/course/course.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent},
  { path: 'Courses', component: CourseslistComponent},
  { path: 'Courses/:id:', component: CourseComponent},
  { path: 'Teachers', component: TeacherslistComponent},
  { path: 'Teachers/:id:', component: TeacherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [AppComponent];