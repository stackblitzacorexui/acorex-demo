import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  AXBadgeModule, AXButtonModule, AXCalendarModule, AXCheckBoxModule, AXDropdownModule, AXEditorDecoratorModule, AXFormModule, AXIconModule, AXLabelModule, AXLoadingModule, AXNumberBoxModule, AXSwitchModule, AXTextBoxModule } from '@acorex/components';
import { routes } from './dropdown-button.routes';
import { DropdownButtonSplitPage } from './dropdown-button-split/dropdown-button-split.page';
import { DropdownButtonSinglePage } from './dropdown-button-single/dropdown-button-single.page';
import { DropdownButtonCustomPanelPage } from './dropdown-button-custom-panel/dropdown-button-custom-panel.page';




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
    AXSwitchModule,
    AXCalendarModule
]

const PAGES: any = [
    DropdownButtonSplitPage,
    DropdownButtonSinglePage,
    DropdownButtonCustomPanelPage,
]


@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class DropdownButtonModule { }