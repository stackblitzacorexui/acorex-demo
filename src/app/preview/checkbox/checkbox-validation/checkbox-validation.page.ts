import { AXFormComponent } from '@acorex/components';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-checkbox-validation',
    templateUrl: './checkbox-validation.page.html'
})
export class CheckboxValidationPage implements OnInit {
    @ViewChild(AXFormComponent)
    form: AXFormComponent;

    termAccepted: boolean = false;

    constructor() { }

    ngOnInit(): void { }

    handleSubmitForm() {
        this.form.validate().then(c => {
            console.log(c);
        })
    }
}
