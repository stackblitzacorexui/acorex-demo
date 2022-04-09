import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
@Component({
  selector: 'app-textbox-mask-row',
  templateUrl: './textbox-mask.page.html',
})
export class TextboxMaskPage implements OnInit {
  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
    }
    _mask_num = /^\d+$/
  ngOnInit() {}
}
