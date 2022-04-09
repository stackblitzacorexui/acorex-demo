import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
@Component({
  selector: 'app-tab-usage',
  templateUrl: './tab-usage.page.html',
})
export class TabUsagePage implements OnInit {
  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
    }

  ngOnInit() {}

}
