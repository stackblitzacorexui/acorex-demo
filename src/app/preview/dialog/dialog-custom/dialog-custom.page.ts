import { AXDialogService, AXToastService } from '@acorex/components';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dialog-custom',
    templateUrl: './dialog-custom.page.html'
})
export class DialogCustomPage implements OnInit {
    constructor(private dialogService: AXDialogService,
        private toastService: AXToastService) { }

    ngOnInit(): void { }

    _handleOpenClick() {
        this.dialogService.show({
            title: 'Delete Confirmation',
            type: 'danger',
            content: 'You are about to delete this item. It can be restore at a later time! Continue?',
            buttons: [
                {
                    name: 'delete',
                    text: 'Delete',
                    color: 'danger'
                },
                {
                    name: 'archive',
                    text: 'Archive',
                    color: 'primary',
                    look: 'outline'
                },
                {
                    name: 'cancel',
                    text: 'Cancel',
                    color: 'light'
                }
            ]
        }).then(result => {
            switch (result.name) {
                case 'delete':
                    this.toastService.success('The file deleted successfuly');
                    break;
                case 'archive':
                    this.toastService.info('The file archived successfuly');
                default:
                    break;
            }
        });
    }
}
