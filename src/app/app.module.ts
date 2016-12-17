import { DataFilterPipe } from './core/pipes/app-pipe.module';
import { TeacherslistModule } from './components/teacherslist/teacherslist.module';
import { CourseslistModule } from './components/courseslist/courseslist.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HomeModule } from './components/home/home.module';
import { CourseService } from './core/shared/service.courses';
import { TeacherService } from './core/shared/service.teachers';

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
    HomeComponent
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
