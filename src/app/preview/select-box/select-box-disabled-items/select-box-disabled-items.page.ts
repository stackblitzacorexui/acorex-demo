import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';

@Component({
  selector: 'app-select-box-disabled-items',
  templateUrl: './select-box-disabled-items.page.html',
})
export class SelectBoxDisabledItemsPage {
  _names: string[];

  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
      this._names = ds.getPersonNames();
  }

  _isItemDisabled(e:any)
    {
        return ['Emma', 'Ava'].includes(e.item.text)
    }
}
