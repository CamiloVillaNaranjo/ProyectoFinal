import { RouterModule } from '@angular/router';
import { AppModule } from './../../app.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular2-datatable';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseComponent } from './../course/course.component';
import { CourseslistComponent } from './courseslist.component';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    CourseslistComponent,
    CourseComponent
  ]
})
export class CourseslistModule { }
