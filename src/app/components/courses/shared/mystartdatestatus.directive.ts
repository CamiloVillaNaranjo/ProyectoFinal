import { Directive, Input, ElementRef, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appMystatusdate]'
})
export class MyStartDateStatusDirective {

  constructor(private el: ElementRef) {
        this.setColorStatus();
    }

    @Input('date') date: Date;

    ngOnChanges(changes: SimpleChanges) {
        this.setColorStatus();
    }

    setColorStatus() {
        let currentDate: Date = new Date();
        let courseDate: Date = new Date(this.date);
        let diffDays: number = Math.ceil((courseDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));
        if (diffDays > 30) {
            this.el.nativeElement.style.background = 'green';
        } else if (diffDays < 30 && diffDays > 0) {
            this.el.nativeElement.style.background = 'yellow';
        } else {
            this.el.nativeElement.style.background = 'red';
        }
    }
}
