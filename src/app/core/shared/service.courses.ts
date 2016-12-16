import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Course } from './../../components/models/class.courses';
@Injectable()
export class CourseService {
    arrayCurses: Course[];
    constructor(private http: Http) {}

    getCourseList(): Course[] {
        this.http.get('./assets/data/coursesList.json')
            .subscribe((data) => {
                setTimeout(() => {
                    this.arrayCurses = data.json();
                }, 1000);
            });
            return this.arrayCurses;
    }
// tslint:disable-next-line:eofline
}