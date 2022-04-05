import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';

@Component({
  selector: 'app-selection-list-multiple',
  templateUrl: './selection-list-multiple.page.html',
})
export class SelectionListMultiple implements OnInit {
  _names: string[];

  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
    }


  ngOnInit() {}
  getBooks() {
    return this.ds.generateBooks().slice(0, 3)
}
}
