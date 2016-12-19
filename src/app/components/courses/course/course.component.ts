import { Teacher } from './../../../shared/models/class.teachers';
import { Course } from './../../../shared/models/class.courses';
import { CourseService } from './../../../core/providers/service.courses';
import { TeacherService } from './../../../core/providers/service.teachers';

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  public course: Course;
  public courseId: string;
  public teachers: Teacher[];

  constructor(private route: ActivatedRoute,
              private courseService: CourseService,
              private teacherService: TeacherService) {

              }

  ngOnInit() {
    this.teacherService.getAll()
        .subscribe(
        (teachers: Teacher[]) => this.teachers = teachers
        );

    this.route.params.forEach((param: Params) =>
        this.courseId = param['id:']);

    if (this.courseId !== undefined) {
      let id = parseInt(this.courseId, 0);
      this.courseService.getById(id)
          .subscribe((c: Course) => this.course = c);
    } else {
      this.course = new Course(null);
    }
  }

  onSubmit() {
    if (this.courseId === '-1') {
      this.courseService.addItem(this.course)
          .subscribe(c => this.showMessage(c.courseName + ' successful created!'));
    } else {
      this.courseService.updateItem(this.course)
          .subscribe(c => this.showMessage(c.courseName + ' successful updated!'));
    }
  }

  showMessage(message: string) {
    alert('Course: ' + message);
  }

}
