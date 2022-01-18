import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-calendar-usage',
    templateUrl: './calendar-usage.page.html'
})
export class CalendarUsagePage implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    _handleValueChanged(e: any) {
        console.log(e);
        
    }
}
