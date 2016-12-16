import { Component, OnInit, Pipe } from '@angular/core';
import { TeacherService } from './../../core/shared/service.teachers';
import { Teacher } from './../models/class.teachers';


@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit {

  teacherList: Teacher[];
  filterQuery: string = '';
  rowsOnPage: number = 10;
  sortBy: string = 'teacherName';
  sortOrder: string = 'asc';

  constructor(private myService: TeacherService) { }

  ngOnInit() {
    this.teacherList = this.myService.getCourseList();
  }

  public toInt(num: string){
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.name.length;
  }

}
