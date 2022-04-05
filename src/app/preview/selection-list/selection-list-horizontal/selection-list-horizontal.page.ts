import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';

@Component({
  selector: 'app-selection-list-horizontal',
  templateUrl: './selection-list-horizontal.page.html',
})
export class SelectionListHorizontalPage implements OnInit {

  _names: string[];

  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
    }

  ngOnInit() {}
  getBooks() {
    return this.ds.generateBooks().slice(0, 3)
}
}
