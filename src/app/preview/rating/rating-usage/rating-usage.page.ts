import { AXClickEvent, AXToastService, AX_TIME_FORMAT } from '@acorex/components';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
@Component({
  selector: 'app-rating-usage',
  templateUrl: './rating-usage.page.html',
})
export class RatingUsagePage implements OnInit {
    items: any[] = [
        { index: 0, selected: false },
        { index: 1, selected: false },
        { index: 2, selected: false },
        { index: 3, selected: false },
        { index: 4, selected: false },
    ]
  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
    }
  ngOnInit() {}
  handleStarClick(item) {
    var a = this.items.slice(0,++item.index)
    }
}
