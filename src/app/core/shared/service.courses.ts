import { Subject, Observable } from 'rxjs/Rx';
import { Course } from './../models/class.courses';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class CourseService {

    course: Course[];

    constructor(private http: Http) {}

    getAll(): Observable<Course[]> {
        return this.http.get('./assets/data/coursesList.json')
        .map((r: Response) => r.json() as Course[]);
    }
}