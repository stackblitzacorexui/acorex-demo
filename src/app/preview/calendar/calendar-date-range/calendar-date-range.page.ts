import { AXDateTime } from '@acorex/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-date-range',
  templateUrl: './calendar-date-range.page.html'
})
export class CalendarDateRangePage implements OnInit {

  _minValue: Date = new AXDateTime().add('day', -3).date;
  _maxValue: Date = new AXDateTime().add('day', 17).date;

  constructor() { }

  ngOnInit() {
  }

  _handleValueChanged(e:any){
    console.log(e);
    
  }
}
