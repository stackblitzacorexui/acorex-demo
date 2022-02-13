import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';

@Component({
  selector: 'app-select-box-multiple',
  templateUrl: './select-box-multiple.page.html',
})
export class SelectBoxMultiplePage implements OnInit {
  _names: string[];

  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
        this._names = ds.getPersonNames();
    }


  ngOnInit() {}
}
