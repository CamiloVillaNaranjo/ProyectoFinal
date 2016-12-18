import { ICommonServiceBehavior } from './../../shared/services-definitions.inteface';
///My custom class imported
import { Teacher } from './../../shared/models/class.teachers';

import { Subject, Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class TeacherService implements ICommonServiceBehavior {

    headers: Headers =  new Headers({ 'Content-Type': 'application/json' });
    urlService: string = './assets/data/teachersList.json';

    TEACHERS: Teacher[] = [
        {teacherId: 1, teacherName: 'Camilo Alfonso', teacherLastname: 'Villa Naranjo'},
        {teacherId: 2, teacherName: 'Juan David', teacherLastname: 'Nicholls'},
        {teacherId: 3, teacherName: 'Catalina', teacherLastname: 'Lopez Lopez'},
        {teacherId: 4, teacherName: 'Camilo', teacherLastname: 'Loaiza'},
        {teacherId: 5, teacherName: 'Jorge', teacherLastname: 'Ripol'},
        {teacherId: 6, teacherName: 'Fabian', teacherLastname: 'Buitrago'},
        {teacherId: 7, teacherName: 'Wilson', teacherLastname: 'Espinosa'},
        {teacherId: 8, teacherName: 'Carlos', teacherLastname: 'Campillo'},
        {teacherId: 9, teacherName: 'Luis', teacherLastname: 'Bedoya'},
        {teacherId: 10, teacherName: 'Carlos', teacherLastname: 'Naranjo Rojas'}
        ];

    constructor(private http: Http) {}

    getAll(): Teacher[] {
        return this.TEACHERS;
    }

    getById(id: number): Teacher {
        if (!id === undefined) {
            return this.clone(this.TEACHERS.find((t: Teacher) => t.teacherId === id));
        }
    }

    addItem(teacher: Teacher) {
        this.http.post(this.urlService, JSON.stringify(teacher), { headers: this.headers })
                 .map((res: Response) => res.json().data as Teacher);
    }

    updateItem(teacher: Teacher) {
        let originalTeacher = this.TEACHERS.find(t => t.teacherId === teacher.teacherId);
        if (originalTeacher) {
            Object.assign(originalTeacher, teacher);
        }
    }

    private clone(object: any) {
        return JSON.parse(JSON.stringify(object));
    }
}