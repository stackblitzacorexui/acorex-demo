import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  AXBadgeModule, AXButtonModule, AXDecoratorPrefixComponent, AXEditorDecoratorModule, AXFormModule, AXIconModule, AXLabelModule, AXLoadingModule, AXSelectBoxModule, AXSelectionListModule, AXSwitchModule, AXTabsModule, AXTextBoxModule } from '@acorex/components';
import { routes } from './tab.routes';
import { TabUsagePage } from './tab-usage/tab-usage.page';
import { TabDecorationPage } from './tab-decoration/tab-decoration.page';
import { TabtDisabledPage } from './tab-disabled/tab-disabled.page';
import { TabCustomPage } from './tab-custom/tab-custom.page';
import { TabViewContentPage } from './tab-view-content/tab-view-content.page';




const MODULES: any = [
    AXIconModule,
    AXLoadingModule,
    AXFormModule,
    AXLabelModule,
    AXButtonModule,
    AXTabsModule,
    AXBadgeModule,
    AXEditorDecoratorModule,
    AXSelectionListModule,
    AXTextBoxModule
    
]

const PAGES: any = [
 TabUsagePage,
 TabDecorationPage,
 TabtDisabledPage,
 TabCustomPage,
 TabViewContentPage
]


@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class TabModule { }