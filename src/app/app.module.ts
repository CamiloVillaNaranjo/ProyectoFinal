///My Modules imported
import { DataFilterPipe } from './shared/pipes/app-pipe.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './components/home/home.module';
import { TeacherslistModule } from './components/teachers/teacherslist.module';
import { CourseslistModule } from './components/courses/courseslist.module';
///My components imported
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './core/navbar/navbar.component';
///My providers imported
import { CourseService } from './core/providers/service.courses';
import { TeacherService } from './core/providers/service.teachers';

import { BrowserModule } from '@angular/platform-browser';
import { DataTableModule } from 'angular2-datatable';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CourseslistModule,
    TeacherslistModule,
    AppRoutingModule
  ],
  providers: [
    TeacherService,
    CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
