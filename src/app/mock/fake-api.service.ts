import { Course } from './../shared/models/class.courses';
import { Teacher } from './../shared/models/class.teachers';

import { InMemoryDbService } from 'angular-in-memory-web-api';

export class YuxiWebApi implements InMemoryDbService {
createDb() {
let courses = [
{ id: 1, courseName: 'Angular 2', startDate: new Date('01/01/2017'), duration: 32, taughtBy: 9 },
{ id: 2, courseName: 'Ionic 2', startDate: new Date('01/12/2016'), duration: 20, taughtBy: 2 },
{ id: 3, courseName: 'Test Automation', startDate: new Date('01/05/2016'), duration: 30, taughtBy: 7 },
{ id: 4, courseName: 'Machine Learning', startDate: new Date('05/15/2017'), duration: 45, taughtBy: 6 }
];

let teachers = [
{ id: 1, teacherName: 'Camilo Alfonso', teacherLastname: 'Villa Naranjo' },
{ id: 2, teacherName: 'Juan David', teacherLastname: 'Nicholls' },
{ id: 3, teacherName: 'Catalina', teacherLastname: 'Lopez Lopez' },
{ id: 4, teacherName: 'Camilo', teacherLastname: 'Loaiza' },
{ id: 5, teacherName: 'Jorge', teacherLastname: 'Ripol' },
{ id: 6, teacherName: 'Fabian', teacherLastname: 'Buitrago' },
{ id: 7, teacherName: 'Wilson', teacherLastname: 'Espinosa' },
{ id: 8, teacherName: 'Carlos', teacherLastname: 'Campillo' },
{ id: 9, teacherName: 'Luis', teacherLastname: 'Bedoya' },
{ id: 10, teacherName: 'Carlos', teacherLastname: 'Naranjo Rojas' }
];
return { teachers, courses };
}
}