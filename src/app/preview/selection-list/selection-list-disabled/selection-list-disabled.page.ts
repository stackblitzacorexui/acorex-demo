import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';

@Component({
  selector: 'app-selection-list-disabled',
  templateUrl: './selection-list-disabled.page.html',
})
export class SelectionListDisabledPage {
  _names: string[];

  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
      this._names = ds.getPersonNames();
  }
  getOneBook(){
    return this.ds.generateBooks().slice(0,1)
    
}


  
}
