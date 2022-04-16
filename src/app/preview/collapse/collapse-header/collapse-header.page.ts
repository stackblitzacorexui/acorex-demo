import { AXClickEvent } from '@acorex/components';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-box-usage',
  templateUrl: './number-box-usage.page.html',
})
export class NumberBoxUsagePage implements OnInit {
  value: Number =null;
  
  readonly _opt = {
    decimals: 0,
    minValue: -2000,
    maxValue: 10000,
    separator: ',',
    padDecimalZeros: false,
  };

  _opt2 = Object.assign({}, this._opt);

  constructor(cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  _handleApplyClick(e: AXClickEvent) {
    this._opt2 = Object.assign({}, this._opt);
  }
}
