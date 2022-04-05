import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
import { AXDataListQuery } from '@acorex/components';

@Component({
  selector: 'app-selection-list-separate-items',
  templateUrl: './selection-list-separate-items.page.html',
})
export class SelectionListSeparateItemsPage implements OnInit {

  _names: string[];

  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
    }

  ngOnInit() {}
  getBooks() {
    return this.ds.generateBooks().slice(0, 3)
}
}
