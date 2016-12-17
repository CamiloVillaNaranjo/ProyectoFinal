import { TeacherService } from './../../core/shared/service.teachers';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacherslist',
  templateUrl: './teacherslist.component.html',
  styleUrls: ['./teacherslist.component.css']
})
export class TeacherslistComponent implements OnInit {

  public data;
  public filterQuery = '';
  public rowsOnPage = 5;
  public sortBy = 'teachername';
  public sortOrder = 'asc';

  constructor(private teacherService: TeacherService) { }

  ngOnInit() {
    this.teacherService.getAll()
        .subscribe((list) => this.data = list);
  }

  public toInt(num: string) {
        return +num;
  }

  public sortByWordLength = (a: any) => {
        return a.city.length;
  }

}
