///My custom class imported
import { Teacher } from './../../shared/models/class.teachers';
import { ICommonServiceBehavior } from './../../shared/services-definitions.inteface';

import { Subject, Observable, Operator } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TeacherService implements ICommonServiceBehavior {

    headers: Headers =  new Headers({ 'Content-Type': 'application/json' });
    urlService: string = './api/teachers';

    constructor(private http: Http) {}

    getAll(): Observable<Teacher[]> {
        return this.http.get(this.urlService)
                        .map((res: Response) => res.json().data as Teacher[]);
    }

    getById(id: number): Observable<Teacher> {
        if (id !== undefined) {
            const url = `${this.urlService}/${id}`;
            return this.http.get(url)
                            .map((res: Response) => res.json().data as Teacher);
        }
    }

    addItem(teacher: Teacher): Observable<Teacher> {
       return this.http
                .post(this.urlService, JSON.stringify(teacher), { headers: this.headers })
                .map((res: Response) => res.json().data as Teacher);
    }

    updateItem(teacher: Teacher): Observable<Teacher> {
        const url = `${this.urlService}/${teacher.teacherId}`;
        return this.http
                .put(url, JSON.stringify(teacher), { headers: this.headers })
                .map(() => teacher);
    }
}