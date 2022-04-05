import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';

@Component({
  selector: 'app-selection-list-card-style',
  templateUrl: './selection-list-card-style.page.html',
})
export class SelectionListCardStyle implements OnInit {
  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {}

  ngOnInit() {}

  getBooks() {
    return this.ds.generateBooks().slice(0, 3)
}

}
