export class Course{
    constructor(
        public id: number,
        public courseName: string,
        public startDate: Date,
        public duration: number,
        public taughBy: string
    ){}
}