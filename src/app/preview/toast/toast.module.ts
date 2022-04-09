import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  AXBadgeModule, AXButtonModule, AXDecoratorPrefixComponent, AXEditorDecoratorModule, AXFormModule, AXIconModule, AXInputMaskModule, AXLabelModule, AXLoadingModule, AXSelectBoxModule, AXSelectionListModule, AXSwitchModule, AXTabsModule, AXTextareaModule, AXTextBoxModule, AXTimeBoxModule } from '@acorex/components';
import { routes } from './toast.routes';
import { ToastUsagePage } from './toast-usage/toast-usage.page';


const MODULES: any = [
 
    AXLoadingModule,
    AXFormModule,
    AXLabelModule,
    AXButtonModule,
    AXTextBoxModule,
    AXInputMaskModule,
    AXTimeBoxModule,
    AXSelectBoxModule
    
    
]

const PAGES: any = [
ToastUsagePage
]


@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class ToastModule { }