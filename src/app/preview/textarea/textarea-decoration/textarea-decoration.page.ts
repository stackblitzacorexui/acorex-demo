import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
@Component({
  selector: 'app-textarea-decoration',
  templateUrl: './textarea-decoration.page.html',
})
export class textareaDecorationPage {

  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
  }
}
