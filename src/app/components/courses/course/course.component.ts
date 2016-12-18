import { Course } from './../../../shared/models/class.courses';
import { CourseService } from './../../../core/providers/service.courses';

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseElement: Course;
  courseId: string;

  constructor(private route: ActivatedRoute,
              private courseService: CourseService) { }

  ngOnInit() {
    this.route.params.forEach((param: Params) =>
        this.courseId = param['id:']);

    if (this.courseId !== undefined) {
      this.courseElement = this.courseService.getById(parseInt(this.courseId));
    } else {
      this.courseElement = this.courseService.getById(-1);
    }
  }

}
