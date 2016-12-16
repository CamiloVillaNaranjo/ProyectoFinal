import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Teacher } from './../../components/models/class.teachers';

@Injectable()
export class TeacherService {
    arrayTeachers: Teacher[];
    constructor(private http: Http) {}

    getCourseList(): Teacher[] {
        this.http.get('./assets/data/teachersList.json')
            .subscribe((data) => {
                setTimeout(() => {
                    this.arrayTeachers = data.json();
                }, 1000);
            });
            return this.arrayTeachers;
    }
// tslint:disable-next-line:eofline
}