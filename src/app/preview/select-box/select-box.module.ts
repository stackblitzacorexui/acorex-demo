import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  AXBadgeModule, AXButtonModule, AXEditorDecoratorModule, AXFormModule, AXIconModule, AXLabelModule, AXLoadingModule, AXSelectBoxModule, AXSwitchModule } from '@acorex/components';
import { routes } from './select-box.routes';
import { SelectBoxDisabledItemsPage } from './select-box-disabled-items/select-box-disabled-items.page';
import { SelectBoxShowCheckboxesPage } from './select-box-show-checkboxes/select-box-show-checkboxes.page';
import { SelectBoxMultiplePage } from './select-box-multiple/select-box-multiple.page';
import { SelectBoxLazyLoadPage } from './select-box-lazy-load/select-box-lazy-load.page';
import { SelectBoxSignlePage } from './select-box-signle/select-box-signle.page';




const MODULES: any = [
    AXIconModule,
    AXEditorDecoratorModule,
    AXBadgeModule,
    AXLoadingModule,
    AXSwitchModule,
    AXSelectBoxModule,
    AXFormModule,
    AXLabelModule,
    AXButtonModule
]

const PAGES: any = [
    SelectBoxDisabledItemsPage,
    SelectBoxShowCheckboxesPage,
    SelectBoxMultiplePage,
    SelectBoxLazyLoadPage,
    SelectBoxSignlePage
]


@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class SelectBoxModule { }