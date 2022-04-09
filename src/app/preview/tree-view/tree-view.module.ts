import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  AXBadgeModule, AXButtonModule, AXDecoratorPrefixComponent, AXEditorDecoratorModule, AXFormModule, AXIconModule, AXInputMaskModule, AXLabelModule, AXLoadingModule, AXSelectBoxModule, AXSelectionListModule, AXSwitchModule, AXTabsModule, AXTextareaModule, AXTextBoxModule, AXTimeBoxModule, AXTreeViewModule } from '@acorex/components';
import { routes } from './tree-view.routes';
import { TreeViewPage } from './tree-view-usage/tree-view-usage.page';


const MODULES: any = [
 AXTreeViewModule
   
]

const PAGES: any = [
TreeViewPage
]


@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class TreeModule { }