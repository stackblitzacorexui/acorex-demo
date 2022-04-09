import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
@Component({
  selector: 'app-tab-disabled',
  templateUrl: './tab-disabled.page.html',
})
export class TabtDisabledPage {
  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
  }

}
