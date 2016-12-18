import { Course } from './../../shared/models/class.courses';
import { CourseService } from './../../core/providers/service.courses';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courseslist',
  templateUrl: './courseslist.component.html',
  styleUrls: ['./courseslist.component.css']
})
export class CourseslistComponent implements OnInit {

  public data;
  public filterQuery = '';
  public rowsOnPage = 5;
  public sortBy = 'name';
  public sortOrder = 'asc';

  constructor(private coursesService: CourseService) { }

  ngOnInit() {
    this.data = this.coursesService.getAll();
        ///.subscribe((list) => this.data = list);
  }

  public toInt(num: string) {
        return +num;
  }

  public sortByWordLength = (a: any) => {
        return a.city.length;
  }

}
