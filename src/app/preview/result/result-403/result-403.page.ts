import { AXClickEvent, AXToastService, AX_TIME_FORMAT } from '@acorex/components';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
@Component({
  selector: 'app-result-403',
  templateUrl: './result-403.page.html',
})
export class Result403Page implements OnInit {

  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
    }
  ngOnInit() {}
}
