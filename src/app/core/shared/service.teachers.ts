import { Subject, Observable } from 'rxjs/Rx';
import { Teacher } from './../../core/models/class.teachers';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class TeacherService {

    arrayTeachers: Teacher[] = [
        new Teacher(1, 'Camilo Alfonso', 'Villa Naranjo'),
        new Teacher(2, 'Juan David', 'Nicholls'),
        new Teacher(3, 'Catalina', 'Lopez Lopez'),
        new Teacher(4, 'Camilo', 'Loaiza'),
        new Teacher(5, 'Jorge', 'Ripol'),
        new Teacher(6, 'Fabian', 'Buitrago'),
        new Teacher(7, 'Wilson', 'Espinosa'),
        new Teacher(8, 'Carlos', 'Campillo'),
        new Teacher(9, 'Luis', 'Bedoya'),
        new Teacher(10, 'Carlos', 'Naranjo Rojas')];

    constructor(private http: Http) {}

    getAll(): Observable<Teacher[]> {
        return this.http.get('./assets/data/teachersList.json')
            .map((r: Response) => r.json() as Teacher[]);
    }

    getById(id: number): Teacher{
        return this.arrayTeachers.find((course: Teacher) => course.teacherId === id);
    }
}