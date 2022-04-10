import { AXClickEvent, AXToastService, AX_TIME_FORMAT } from '@acorex/components';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
@Component({
  selector: 'app-breadcrumbs-usage',
  templateUrl: './breadcrumbs-usage.page.html',
})
export class BreadcrumbsnUsagePage implements OnInit {
  isLoading = true;
  constructor(private cdr: ChangeDetectorRef, private ds: DemoService) {
    }
  ngOnInit() {}
  
}
