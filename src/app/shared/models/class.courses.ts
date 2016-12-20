export class Course {
    constructor(
        public id: number,
        public courseName = '',
        public startDate = '01/01/2017',
        public duration = 1,
        public taughtBy: number = null
    ) {}
}