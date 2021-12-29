import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './alert.routes';

import { AXAlertModule, AXButtonModule, AXEditorDecoratorModule, AXIconModule } from '@acorex/components';

import { AlertAdditionalPage } from './alert-additional/alert-additional.page';
import { AlertAppearancePage } from './alert-appearance/alert-appearance.page';
import { AlertButtonsPage } from './alert-buttons/alert-buttons.page';
import { AlertMethodsPage } from './alert-methods/alert-methods.page';
import { AlertRightLinkPage } from './alert-right-link/alert-rightlink.page';

const MODULES: any = [
    AXAlertModule,
    AXIconModule,
    AXEditorDecoratorModule,
    AXButtonModule
]

const PAGES: any = [
    AlertAdditionalPage,
    AlertAppearancePage,
    AlertButtonsPage,
    AlertMethodsPage,
    AlertRightLinkPage,
]


@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class AlertModule { }