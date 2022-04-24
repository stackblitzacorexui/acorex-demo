import { AXClickEvent, AXToastService, AX_TIME_FORMAT } from '@acorex/components';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
@Component({
  selector: 'app-result-400',
  templateUrl: './result-400.page.html',
})
export class Result400Page implements OnInit {

  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
    }
  ngOnInit() {}

}
