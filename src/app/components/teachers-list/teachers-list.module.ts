import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersListComponent } from './teachers-list.component';
import { TeacherdetailsComponent } from './../teacherdetails/teacherdetails.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TeachersListComponent, TeacherdetailsComponent]
})
export class TeachersListModule { }
