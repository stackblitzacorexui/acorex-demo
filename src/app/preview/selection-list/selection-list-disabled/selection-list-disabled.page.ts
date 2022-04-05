import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
@Component({
  selector: 'app-selection-list-disabled',
  templateUrl: './selection-list-disabled.page.html',
})
export class SelectionListDisabledPage {
  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
  }
  getOneBook(){
    return this.ds.generateBooks().slice(0,1)
  }
}
