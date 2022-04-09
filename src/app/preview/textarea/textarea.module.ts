import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  AXBadgeModule, AXButtonModule, AXDecoratorPrefixComponent, AXEditorDecoratorModule, AXFormModule, AXIconModule, AXLabelModule, AXLoadingModule, AXSelectBoxModule, AXSelectionListModule, AXSwitchModule, AXTabsModule, AXTextareaModule, AXTextBoxModule } from '@acorex/components';
import { routes } from './textarea.routes';
import { textareaUsagePage } from './textarea-usage/textarea-usage.page';
import { textareaDecorationPage } from './textarea-decoration/textarea-decoration.page';
import { textareaRowPage } from './textarea-row/textarea-row.page';

const MODULES: any = [
    AXIconModule,
    AXLoadingModule,
    AXFormModule,
    AXLabelModule,
    AXButtonModule,
    AXBadgeModule,
    AXEditorDecoratorModule,
    AXSelectionListModule,
    AXTextBoxModule,
    AXTextareaModule
    
]

const PAGES: any = [
textareaUsagePage,
textareaDecorationPage,
textareaRowPage
]


@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class TextareaModule { }