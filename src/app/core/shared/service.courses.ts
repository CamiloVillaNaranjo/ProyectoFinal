import { async } from '@angular/core/testing';
import { Subject, Observable } from 'rxjs/Rx';
import { Course } from './../models/class.courses';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class CourseService {

    arrayCurses: Course[] = [
    new Course(1, 'Angular 2', new Date('01/01/2017'), 32, '9'),
    new Course(2, 'Ionic 2', new Date('01/12/2016'), 20, '2'),
    new Course(3, 'Test Automation', new Date('01/05/2016'), 30, '7'),
    new Course(4, 'Machine Learning', new Date('15/05/2017'), 45, '6')
    ];

    constructor(private http: Http) {}

    getAll(): Observable<Course[]> {
        return this.http.get('./assets/data/coursesList.json')
        .map((r: Response) => r.json() as Course[]);
    }

    getById(id: number): Course {
        return this.arrayCurses.find((course: Course) => course.id === id);
    }
}