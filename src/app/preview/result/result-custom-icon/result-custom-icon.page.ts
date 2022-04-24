import { AXClickEvent, AXToastService, AX_TIME_FORMAT } from '@acorex/components';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
@Component({
  selector: 'app-result-custom-icon',
  templateUrl: './result-custom-icon.page.html',
})
export class ResultCustomIconPage implements OnInit {
  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
    }
  ngOnInit() {}

}
