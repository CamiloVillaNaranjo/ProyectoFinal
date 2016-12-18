import { Teacher } from './../../../shared/models/class.teachers';
import { TeacherService } from './../../../core/providers/service.teachers';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teacher: Teacher;
  teacherId: string;

  constructor(private route: ActivatedRoute,
              private teacherService: TeacherService) { }

  ngOnInit() {
    this.route.params.forEach((p: Params) =>
      this.teacherId = p['id:']);
    if (this.teacherId !== undefined) {
      this.teacher = this.teacherService.getById(parseInt(this.teacherId));
    } else {
      this.teacher = this.teacherService.getById(-1);
    }
  }

}
