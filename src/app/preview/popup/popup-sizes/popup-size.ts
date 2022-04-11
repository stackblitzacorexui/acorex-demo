import { AXPopupService } from '@acorex/components';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { RegisterUserPage } from 'src/app/shared/sample-forms/register-user/register-user.page';

@Component({
    selector: 'popup-size',
    templateUrl: './popup-size.html',
    
})
export class PopUpSize implements OnInit {
    constructor(private _popupService: AXPopupService) { }

    ngOnInit(): void { }
    sizes: any[] = [
        {
            text: "Small",
            value: 'sm'
        },
        {
            text: "Medium",
            value: 'md'
        },
        {
            text: "Large",
            value: 'lg'
        },
        {
            text: "FullScreen",
            value: 'full'
        },

    ]
    selectedSize: any = "md"
    @ViewChild('tpl')
    tpl: TemplateRef<any>;

    handleOpenPopup() {
        this._popupService.open(RegisterUserPage, {
            title: "Sample Popup page",
            size: this.selectedSize,
            showCloseButton: true,
            showHeader: true,
            data: { firstname: "Arash" }
        }).then((c) => {
            c.data;
        })
    }
    _handleValueChanged(e)
    {
    }

}
