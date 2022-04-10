import { AXClickEvent, AXToastService, AX_TIME_FORMAT } from '@acorex/components';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
@Component({
  selector: 'app-breadcrumbs-decoration.page',
  templateUrl: './breadcrumbs-decoration.page.html',
})
export class BreadcrumbsDecorationPage implements OnInit {
  code;
  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
    }
  ngOnInit() {}
}
