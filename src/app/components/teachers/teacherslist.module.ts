import { RouterModule } from '@angular/router';
import { AppModule } from './../../app.module';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular2-datatable';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherComponent } from './teacher/teacher.component';
import { TeacherslistComponent } from './teacherslist.component';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    TeacherslistComponent,
    TeacherComponent
  ]
})
export class TeacherslistModule { }
