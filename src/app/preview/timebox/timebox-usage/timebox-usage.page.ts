import { AXClickEvent, AX_TIME_FORMAT } from '@acorex/components';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
@Component({
  selector: 'app-timebox-usage',
  templateUrl: './timebox-usage.page.html',
})
export class TimeboxUsagePage implements OnInit {
  _selectedTime:Date = new Date();
  _fakeVal = 'HH:mm'

  readonly _opt = {
      minValue: null,
      maxValue: null,
      format: "HH:mm" as AX_TIME_FORMAT,
  }

  _opt2 = Object.assign({}, this._opt);
  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
    }
  ngOnInit() {}
  
  _handleApplyClick(e: AXClickEvent) {
        
    this._opt2 = Object.assign({}, this._opt);
}
}
