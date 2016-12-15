export class Course{
    constructor(
        private courseId: number,
        private courseName: string,
        private startDate: Date,
        private duration: number,
        private taughBy: string
    ){}
}