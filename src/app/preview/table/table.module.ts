import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  AXBadgeModule, AXButtonModule, AXDecoratorPrefixComponent, AXEditorDecoratorModule, AXFormModule, AXIconModule, AXInputMaskModule, AXLabelModule, AXLoadingModule, AXSelectBoxModule, AXSelectionListModule, AXSwitchModule, AXTabsModule, AXTextareaModule, AXTextBoxModule, AXTimeBoxModule, AXTreeViewModule } from '@acorex/components';
import { routes } from './table.routes';
import { TableUsagePage } from './table-usage/table-usage.page';
import { TableResponsivePage } from './table-responsive/table-responsive.page';
import { TableAlternatePage } from './table-alternate/table-alternate.page';


const MODULES: any = [
 AXTreeViewModule
   
]

const PAGES: any = [
TableUsagePage,
TableResponsivePage,
TableAlternatePage
]


@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class TableModule { }