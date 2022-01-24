import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  AXCheckBoxModule, AXFormModule, AXLabelModule } from '@acorex/components';
import { routes } from './checkbox.routes';
import { CheckboxUsagePage } from './checkbox-usage/checkbox-usage.page';
import { CheckBoxWithLabelPage } from './checkbox-with-label/checkbox-with-label.page';
import { CheckBoxWithHintPage } from './checkbox-with-hint/checkbox-with-hint.page';
import { CheckboxReadonlyPage } from './checkbox-readonly/checkbox-readonly.page';
import { CheckboxDisabledPage } from './checkbox-disabled/checkbox-disabled.page';
import { CheckboxIndeterminatePage } from './checkbox-indeterminate/checkbox-indeterminate.page';





const MODULES: any = [
    AXCheckBoxModule,
    AXLabelModule,
    AXFormModule
]

const PAGES: any = [
    CheckboxUsagePage,
    CheckBoxWithLabelPage,
    CheckBoxWithHintPage,
    CheckboxReadonlyPage,
    CheckboxDisabledPage,
    CheckboxIndeterminatePage
]


@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class CheckboxModule { }