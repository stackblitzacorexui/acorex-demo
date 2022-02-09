import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  AXButtonModule, AXCheckBoxModule, AXDatepickerModule, AXEditorDecoratorModule, AXFormModule, AXLabelModule, AXValidationModule } from '@acorex/components';

import { SharedModule } from 'src/app/shared/shared.module';
import { routes } from './dialog.routes';
import { DialogAppearancePage } from './dialog-appearance/dialog-appearance.page';
import { DialogAlertConfirmPage } from './dialog-alert-confirm/dialog-alert-confirm.page';
import { DialogCustomPage } from './dialog-custom/dialog-custom.page';

const MODULES: any = [
    AXDatepickerModule,
    AXEditorDecoratorModule,
    AXLabelModule,
    AXFormModule,
    AXButtonModule,
    SharedModule
]

const PAGES: any = [
    DialogAppearancePage,
    DialogAlertConfirmPage,
    DialogCustomPage
]


@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class DialogModule { }