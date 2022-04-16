import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  AXBadgeModule, AXButtonModule, AXCheckBoxModule, AXCollapseModule, AXDropdownModule, AXEditorDecoratorModule, AXFormModule, AXIconModule, AXLabelModule, AXLoadingModule, AXNumberBoxModule, AXSwitchModule, AXTextBoxModule } from '@acorex/components';
import { routes } from './collapse.routes';
import { CollapseUsagePage } from './collapse-usage/collapse-usage.page';
import { CollapseGroupPage } from './collapse-group/collapse-group.page';





const MODULES: any = [
    AXCollapseModule
    

]

const PAGES: any = [
 CollapseUsagePage,
 CollapseGroupPage
]


@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class CollapseModule { }