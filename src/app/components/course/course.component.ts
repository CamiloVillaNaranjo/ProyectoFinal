import { CourseService } from './../../core/shared/service.courses';
import { Course } from './../../core/models/class.courses';

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseElement;
  courseId;

  constructor(private route: ActivatedRoute,
              private courseService: CourseService) { }

  ngOnInit() {
    this.route.params.forEach((param: Params) =>
        this.courseId = param['id']);

    this.courseElement = this.courseService.getById(parseInt(this.courseId));

    console.log(this.courseElement);
    console.log(this.courseId);
  }

}
