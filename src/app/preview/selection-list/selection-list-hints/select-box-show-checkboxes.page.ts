import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';

@Component({
  selector: 'app-select-box-show-checkboxes',
  templateUrl: './select-box-show-checkboxes.page.html',
})
export class SelectBoxShowCheckboxesPage implements OnInit {
  _names: string[];

  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
        this._names = ds.getPersonNames();
    }


  ngOnInit() {}
}
