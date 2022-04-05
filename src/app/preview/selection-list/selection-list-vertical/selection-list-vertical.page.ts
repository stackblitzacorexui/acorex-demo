import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';

@Component({
  selector: 'app-selection-list-vertical',
  templateUrl: './selection-list-vertical.page.html',
})
export class SelectionListVerticalePage implements OnInit {

  _names: string[];

  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
        this._names = ds.getPersonNames();
    }

  ngOnInit() {}
  getBooks() {
    return this.ds.generateBooks().slice(0, 3)
}
getOneBook(){
    return this.ds.generateBooks().slice(0,1)
    
}
}
