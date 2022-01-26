import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  AXButtonModule, AXCheckBoxModule, AXFormModule, AXLabelModule, AXValidationModule } from '@acorex/components';
import { routes } from './checkbox.routes';
import { CheckboxUsagePage } from './checkbox-usage/checkbox-usage.page';
import { CheckBoxWithLabelPage } from './checkbox-with-label/checkbox-with-label.page';
import { CheckBoxWithHintPage } from './checkbox-with-hint/checkbox-with-hint.page';
import { CheckboxReadonlyPage } from './checkbox-readonly/checkbox-readonly.page';
import { CheckboxDisabledPage } from './checkbox-disabled/checkbox-disabled.page';
import { CheckboxIndeterminatePage } from './checkbox-indeterminate/checkbox-indeterminate.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { CheckboxValidationPage } from './checkbox-validation/checkbox-validation.page';





const MODULES: any = [
    AXCheckBoxModule,
    AXLabelModule,
    AXFormModule,
    AXButtonModule,
    AXValidationModule,
    SharedModule
]

const PAGES: any = [
    CheckboxUsagePage,
    CheckBoxWithLabelPage,
    CheckBoxWithHintPage,
    CheckboxReadonlyPage,
    CheckboxDisabledPage,
    CheckboxIndeterminatePage,
    CheckboxValidationPage
]


@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class CheckboxModule { }