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
      debugger;
      let id = parseInt(this.teacherId, 0);
      this.teacherService.getById(id)
            .subscribe((t: Teacher) => this.teacher = t);
    } else {
      debugger;
      this.teacher = new Teacher(null);
    }
  }

  onSubmit() {
    if (this.teacherId === '-1') {
      this.teacherService.addItem(this.teacher)
          .subscribe(t => this.showMessage(t.teacherName + t.teacherLastname + 'successful created'));
    } else {
      this.teacherService.updateItem(this.teacher)
          .subscribe(t => this.showMessage(t.teacherName + t.teacherLastname + 'successful updated'));
    }
  }

  showMessage(message: string) {
    alert('Teacher: ' + message);
  }

}
