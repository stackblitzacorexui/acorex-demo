import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';

@Component({
  selector: 'app-alert-lock',
  templateUrl: './alert-lock.page.html',
})
export class AlertLockPage implements OnInit {
  _looks: any[] = [];
  constructor(cdr: ChangeDetectorRef, private ds: DemoService) { }
  ngOnInit() {
    this._looks = this.ds.getLooks();
  }

}
