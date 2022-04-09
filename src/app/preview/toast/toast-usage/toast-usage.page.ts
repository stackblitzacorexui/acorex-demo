import { AXClickEvent, AXToastService, AX_TIME_FORMAT } from '@acorex/components';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
@Component({
  selector: 'app-toast-usage',
  templateUrl: './toast-usage.page.html',
})
export class ToastUsagePage implements OnInit {
  code;
  constructor(cdr: ChangeDetectorRef, private ds: DemoService, private toast: AXToastService) {
    }
  ngOnInit() {}
  
  _handleOpenClick(type: string) {
    switch (type) {
        case 'success':
            this.toast.show({
                title: "Job successfuly done.",
                timeOut: 20000,
                type: "success",
                content: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
                buttons: [
                    {
                        name: 'ok',
                        text: 'OK, Thanks',
                        color: 'light'
                    }
                ]
            })
            break;

        case 'danger':
            this.toast.danger("Danger, Please be careful.")
            break;
        case 'info':
            this.toast.info("All tasks restored.")
            break;
        case 'warning':
            this.toast.warning("Attention, all data has been removed");
            break;

        default:
            break;
    }
}
}
