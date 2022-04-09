import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
import { AXDataListQuery } from '@acorex/components';
@Component({
  selector: 'app-tab-custom',
  templateUrl: './tab-custom.page.html',
})
export class TabCustomPage implements OnInit {
  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
    }
  ngOnInit() {}
}
