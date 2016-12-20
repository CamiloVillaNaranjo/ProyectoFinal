///My custom class imported
import { Course } from './../../shared/models/class.courses';
import { ICommonServiceBehavior } from './../../shared/services-definitions.inteface';

import { async } from '@angular/core/testing';
import { Subject, Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class CourseService implements ICommonServiceBehavior{

    urlService: string = './api/courses';
    headers: Headers =  new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getAll(): Observable<Course[]> {
        return this.http.get(this.urlService)
                    .map((res: Response) => res.json().data as Course[]);
    }

    getById(id: number): Observable<Course> {
        if (id !== undefined) {
            const url = `${this.urlService}/${id}`;
            return this.http.get(url)
                            .map((res: Response) => res.json().data as Course);
        }
    }

    addItem(course: Course) {
        return this.http
            .post(this.urlService, JSON.stringify(course), { headers: this.headers })
            .map((res: Response) => res.json().data as Course);
    }

    updateItem(course: Course) {
       const url = `${this.urlService}/${course.id}`;
        return this.http
                .put(url, JSON.stringify(course), { headers: this.headers })
                .map(() => course);
    }
}