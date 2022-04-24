import { AXClickEvent, AXToastService, AX_TIME_FORMAT } from '@acorex/components';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
@Component({
  selector: 'app-result-custom-image',
  templateUrl: './result-custom-image.page.html',
})
export class ResultCustomImagePage implements OnInit {
  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
    }
  ngOnInit() {}
}
