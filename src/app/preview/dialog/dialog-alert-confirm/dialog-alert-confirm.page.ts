import { AXDialogService, AXToastService } from '@acorex/components';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dialog-alert-confirm',
    templateUrl: './dialog-alert-confirm.page.html'
})
export class DialogAlertConfirmPage implements OnInit {
    constructor(private dialogService: AXDialogService) { }

    ngOnInit(): void { }

    _handleOpenClick(type: string) {
        switch (type) {
            case "alert":
                this.dialogService.alert('Attention', 'Indicates a neutral informative change or action.');
                break;
            case "confirm":
                this.dialogService.confirm('Please Confirm', 'Are you sure you want to continue?');
                break;
            default:
                break;
        }
    }
}
