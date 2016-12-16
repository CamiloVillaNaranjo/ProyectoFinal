import { CourseService } from './core/shared/service.courses';
import { TeacherService } from './core/shared/service.teachers';
import { DataFilterPipe } from './core/pipe.data-filter';

import { BrowserModule } from '@angular/platform-browser';
import { DataTableModule } from 'angular2-datatable';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TeachersListComponent } from './components/teachers-list/teachers-list.component';
import { TeacherdetailsComponent } from './components/teacherdetails/teacherdetails.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CoursedetailsComponent } from './components/coursedetails/coursedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherdetailsComponent,
    TeachersListComponent,
    CoursedetailsComponent,
    CourseListComponent,
    DataFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule
  ],
  providers: [TeacherService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
