import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  AXBadgeModule, AXButtonModule, AXEditorDecoratorModule, AXFormModule, AXIconModule, AXLabelModule, AXLoadingModule, AXSelectBoxModule, AXSelectionListModule, AXSwitchModule } from '@acorex/components';
import { routes } from './selection-list.routes';
import { SelectionListVerticalePage } from './selection-list-vertical/selection-list-vertical.page';
import { SelectionListHorizontalPage } from './selection-list-horizontal/selection-list-horizontal.page';
import { SelectionListMultiple } from './selection-list-multiple/selection-list-multiple.page';
import { SelectionListSeparateItemsPage } from './selection-list-separate-items/selection-list-separate-items.page';
import { SelectionListCardStyle } from './selection-list-card-style/selection-list-card-style.page';
import { SelectionListDisabledPage } from './selection-list-disabled/selection-list-disabled.page';
import { SelectionListReadonlyPage } from './selection-list-readonly/selection-list-readonly.page';
import { SelectionListSizePage } from './selection-list-size/selection-list-size.page';




const MODULES: any = [
    AXIconModule,
    AXEditorDecoratorModule,
    AXBadgeModule,
    AXLoadingModule,
    AXSwitchModule,
    AXSelectBoxModule,
    AXFormModule,
    AXLabelModule,
    AXButtonModule,
    AXSelectionListModule
]

const PAGES: any = [
    SelectionListVerticalePage,
    SelectionListHorizontalPage,
    SelectionListMultiple,
    SelectionListSeparateItemsPage,
    SelectionListCardStyle,
    SelectionListDisabledPage,
    SelectionListReadonlyPage,
    SelectionListSizePage
]


@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class SelectListModule { }