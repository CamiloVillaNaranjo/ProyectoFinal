///My custom class imported
import { Course } from './../../shared/models/class.courses';

import { async } from '@angular/core/testing';
import { Subject, Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class CourseService {

    urlService: string = './assets/data/coursesList.json';
    headers: Headers =  new Headers({ 'Content-Type': 'application/json' });

    COURSES: Course[] = [
        { courseId: 1, courseName: 'Angular 2', startDate: new Date('01/01/2017'), duration: 32, taughtBy: 9 },
        { courseId: 2, courseName: 'Ionic 2', startDate: new Date('01/12/2016'), duration: 20, taughtBy: 2 },
        { courseId: 3, courseName: 'Test Automation', startDate: new Date('01/05/2016'), duration: 30, taughtBy: 7 },
        { courseId: 4, courseName: 'Machine Learning', startDate: new Date('15/05/2017'), duration: 45, taughtBy: 6 }
    ];

    constructor(private http: Http) { }

    getAll(): Course[] {
        return this.COURSES;
    }

    getById(id: number): Course {
        return this.COURSES.find((course: Course) => course.courseId === id);
    }

    addItem(course: Course) {
        return this.http
            .post(this.urlService, JSON.stringify(course), { headers: this.headers })
            .map((res: Response) => res.json().data as Course);
    }

    updateItem(course: Course) {
        let originalCourse = this.COURSES.find(c => c.courseId === course.courseId);
        if (originalCourse) {
            Object.assign(originalCourse, course);
        }
    }

    getByTaught(teacherId: number): Course {
        return this.COURSES.find((c: Course) => c.taughtBy === teacherId);
    }

    private clone(object: any) {
        return JSON.parse(JSON.stringify(object));
    }
}