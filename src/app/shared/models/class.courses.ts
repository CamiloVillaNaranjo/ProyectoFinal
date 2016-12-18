export class Course {
    constructor(
        public courseId: number,
        public courseName: string,
        public startDate: Date,
        public duration: number,
        public taughtBy: number
    ) {}
}