import { TeacherComponent } from './../teacher/teacher.component';
import { AppModule } from './../../app.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular2-datatable';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherslistComponent } from './teacherslist.component';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    FormsModule
  ],
  declarations: [
    TeacherslistComponent,
    TeacherComponent
  ]
})
export class TeacherslistModule { }
