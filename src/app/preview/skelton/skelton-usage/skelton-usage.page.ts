import { AXClickEvent, AXToastService, AX_TIME_FORMAT } from '@acorex/components';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
@Component({
  selector: 'app-skelton-usage',
  templateUrl: './skelton-usage.page.html',
})
export class SkeltonUsagePage implements OnInit {
  code: string = ``;
  items: any[] = [];
  isLoading = true;

  constructor(private cdr: ChangeDetectorRef, private ds: DemoService) {
    }
  ngOnInit() {}
  
  trySkelton() {
    this.isLoading = true;
    setTimeout(() => {
        this.isLoading = false;
        this.cdr.markForCheck()
    }, 2000);
    }
    call(phone) {
      return window.location.href = `tel:${phone}`;
  }
  sendEmail(email) {
      return window.location.href = `mailto:${email}`;
  }
}
