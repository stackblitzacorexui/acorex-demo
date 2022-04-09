import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
@Component({
  selector: 'app-textbox-disabled',
  templateUrl: './textbox-disabled.page.html',
})
export class TextboxDisabledPage {

  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
  }
}
