import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-datepicker',
    templateUrl: './datepicker-with-prefix.page.html'
})
export class DatepickerWithPrefix implements OnInit {
    _today:any;
    constructor() { }

    ngOnInit(): void { }
}
