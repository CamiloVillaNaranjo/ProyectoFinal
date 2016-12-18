import { Course } from './../shared/models/class.courses';
import { Teacher } from './../shared/models/class.teachers';

import { InMemoryDbService } from 'angular-in-memory-web-api';

export class YuxiWebApi implements InMemoryDbService {
	createDb() {
		let courses: Course[] = [
			{ courseId: 1, courseName: 'Angular 2', startDate: new Date('01/01/2017'), duration: 32, taughtBy: 9 },
			{ courseId: 2, courseName: 'Ionic 2', startDate: new Date('01/12/2016'), duration: 20, taughtBy: 2 },
			{ courseId: 3, courseName: 'Test Automation', startDate: new Date('01/05/2016'), duration: 30, taughtBy: 7 },
			{ courseId: 4, courseName: 'Machine Learning', startDate: new Date('15/05/2017'), duration: 45, taughtBy: 6 }
		];

		let teachers: Teacher[] = [
			{ teacherId: 1, teacherName: 'Camilo Alfonso', teacherLastname: 'Villa Naranjo' },
			{ teacherId: 2, teacherName: 'Juan David', teacherLastname: 'Nicholls' },
			{ teacherId: 3, teacherName: 'Catalina', teacherLastname: 'Lopez Lopez' },
			{ teacherId: 4, teacherName: 'Camilo', teacherLastname: 'Loaiza' },
			{ teacherId: 5, teacherName: 'Jorge', teacherLastname: 'Ripol' },
			{ teacherId: 6, teacherName: 'Fabian', teacherLastname: 'Buitrago' },
			{ teacherId: 7, teacherName: 'Wilson', teacherLastname: 'Espinosa' },
			{ teacherId: 8, teacherName: 'Carlos', teacherLastname: 'Campillo' },
			{ teacherId: 9, teacherName: 'Luis', teacherLastname: 'Bedoya' },
			{ teacherId: 10, teacherName: 'Carlos', teacherLastname: 'Naranjo Rojas' }
		];
		return { teachers, courses };
	}
}