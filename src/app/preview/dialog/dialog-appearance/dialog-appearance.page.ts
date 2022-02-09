import { AXDialogService} from '@acorex/components';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dialog-appearance',
    templateUrl: './dialog-appearance.page.html'
})
export class DialogAppearancePage implements OnInit {
    constructor(private dialogService: AXDialogService) { }

    ngOnInit(): void { }

    _handleOpenClick(type: string) {
        switch (type) {
            case "success":
            case "primary":
            case "warning":
            case "danger":
            case "info":
                this.dialogService.show({
                    title: ['info', 'primary', 'success'].includes(type) ? "Job successfuly done." : "Job failed.",
                    content: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.`,
                    type,
                    buttons: [
                        {
                            name: 'ok',
                            text: 'OK, Thanks',
                            color: 'light'
                        }
                    ]
                });
                break;
            default:
                break;
        }
    }
}
