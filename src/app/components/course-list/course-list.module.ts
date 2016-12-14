import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { CoursedetailsComponent } from './../coursedetails/coursedetails.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CourseListComponent, CoursedetailsComponent]
})
export class CourseListModule { }
