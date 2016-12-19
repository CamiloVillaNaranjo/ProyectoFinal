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

}
