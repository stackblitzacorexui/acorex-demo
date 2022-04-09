import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
@Component({
  selector: 'app-tab-decoration',
  templateUrl: './tab-decoration.page.html',
})
export class TabDecorationPage {

  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
  }

}
