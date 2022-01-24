import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AXBasePageComponent, AXFormComponent, AXPopupService } from '@acorex/components';

@Component({
    selector:'app-sample-user-form',
    templateUrl: './register-user.page.html',
})
export class RegisterUserPage extends AXBasePageComponent implements OnInit {

    @ViewChild(AXFormComponent)
    form: AXFormComponent;

    constructor(private ref: ElementRef, private cdr: ChangeDetectorRef, private _popupService: AXPopupService) {
        super()
    }
    ngOnInit(): void { }

    firstname: string;
    lastname: string;
    mobile: string;
    email: string;
    notification: boolean;


    _handleSubmitClick() {
        this.form.validate().then(c => {
            this.close({
                firstname: this.firstname,
                lastname: this.lastname,
                mobile: this.mobile,
                email: this.email,
                notification: this.notification,
            });
        })
    }
}
