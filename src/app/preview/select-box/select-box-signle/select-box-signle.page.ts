import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';

@Component({
  selector: 'app-select-box-signle',
  templateUrl: './select-box-signle.page.html',
})
export class SelectBoxSignlePage implements OnInit {

  _names: string[];

  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
        this._names = ds.getPersonNames();
    }

  ngOnInit() {}
}
