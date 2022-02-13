import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  AXBadgeModule, AXButtonModule, AXCheckBoxModule, AXDropdownModule, AXEditorDecoratorModule, AXFormModule, AXIconModule, AXLabelModule, AXLoadingModule, AXNumberBoxModule, AXSwitchModule, AXTextBoxModule } from '@acorex/components';
import { routes } from './number-box.routes';
import { NumberBoxUsagePage } from './number-box-usage/number-box-usage.page';
import { NumberBoxDisabledPage } from './number-box-disabled/number-box-disabled.page';
import { NumberBoxReadonlyPage } from './number-box-readonly/number-box-readonly.page';
import { NumberBoxDecorationPage } from './number-box-decoration/number-box-decoration.page';




const MODULES: any = [
    AXIconModule,
    AXEditorDecoratorModule,
    AXBadgeModule,
    AXLoadingModule,
    AXNumberBoxModule,
    AXButtonModule,
    AXTextBoxModule,
    AXFormModule,
    AXLabelModule,
    AXDropdownModule,
    AXCheckBoxModule,
    AXSwitchModule
]

const PAGES: any = [
    NumberBoxUsagePage,
    NumberBoxDisabledPage,
    NumberBoxReadonlyPage,
    NumberBoxDecorationPage,
]


@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class NumberBoxModule { }