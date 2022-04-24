import { AXClickEvent, AXToastService, AX_TIME_FORMAT } from '@acorex/components';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
@Component({
  selector: 'app-result-500',
  templateUrl: './result-500.page.html',
})
export class Result500Page implements OnInit {
  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
    }
  ngOnInit() {}
}
