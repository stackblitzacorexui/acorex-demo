import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-view-depth',
  templateUrl: './calendar-view-depth.page.html'
})
export class CalendarViewDepthPage implements OnInit {
  _depths: any[] = [
    {
      text: "Days",
      id: 'days'
    },
    {
      text: "Months",
      id: 'months'
    },
    {
      text: "Years",
      id: 'years'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  _handleValueChanged(e: any) {
    console.log(e)
  }
}
