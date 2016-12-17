import { Subject, Observable } from 'rxjs/Rx';
import { Teacher } from './../../core/models/class.teachers';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class TeacherService {

    constructor(private http: Http) {}

    getAll(): Observable<Teacher[]> {
        return this.http.get('./assets/data/teachersList.json')
            .map((r: Response) => r.json() as Teacher[]);
    }
}