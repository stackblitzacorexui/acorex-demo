import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  AXBadgeModule, AXButtonModule, AXDecoratorPrefixComponent, AXEditorDecoratorModule, AXFormModule, AXIconModule, AXInputMaskModule, AXLabelModule, AXLoadingModule, AXSelectBoxModule, AXSelectionListModule, AXSwitchModule, AXTabsModule, AXTextareaModule, AXTextBoxModule, AXTimeBoxModule } from '@acorex/components';
import { routes } from './rating.routes';
import { RatingUsagePage } from './rating-usage/rating-usage.page';


const MODULES: any = [
]
const PAGES: any = [
RatingUsagePage
]

@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class RatingModule { }