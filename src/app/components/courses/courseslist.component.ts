import { Course } from './../../shared/models/class.courses';
import { CourseService } from './../../core/providers/service.courses';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courseslist',
  templateUrl: './courseslist.component.html',
  styleUrls: ['./courseslist.component.css']
})
export class CourseslistComponent implements OnInit {

  public data: Course[];
  public filterQuery = '';
  public rowsOnPage = 5;
  public sortBy = 'courseName';
  public sortOrder = 'asc';
  currenDate: string;

  constructor(private coursesService: CourseService) { }

  ngOnInit() {
    this.currenDate = new Date().toLocaleDateString();
    this.coursesService.getAll().subscribe(
      (courses: Course[]) => this.data = courses
    );
  }

  public toInt(num: string) {
        return +num;
  }

  public sortByWordLength = (a: any) => {
        return a.city.length;
  }

  validateDates(arg: Date): any {
    let currentDate: Date = new Date();
    let courseDate: Date = new Date(arg);
    let diffDays: number = Math.ceil((courseDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));
    if (diffDays > 30) {
      return 'green';
    } else if (diffDays < 30 && diffDays > 0) {
      return 'yellow';
    } else {
      return 'red';
    }
  }

}
