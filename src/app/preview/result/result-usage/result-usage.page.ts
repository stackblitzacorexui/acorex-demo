import { AXClickEvent, AXToastService, AX_TIME_FORMAT } from '@acorex/components';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
@Component({
  selector: 'app-result-usage',
  templateUrl: './result-usage.page.html',
})
export class ResultUsagePage implements OnInit {
  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
    }
  ngOnInit() {}
  
  

}
