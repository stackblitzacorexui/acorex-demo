import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  AXBadgeModule, AXButtonModule, AXDecoratorPrefixComponent, AXEditorDecoratorModule, AXFormModule, AXIconModule, AXInputMaskModule, AXLabelModule, AXLoadingModule, AXSelectBoxModule, AXSelectionListModule, AXSwitchModule, AXTabsModule, AXTextareaModule, AXTextBoxModule } from '@acorex/components';
import { routes } from './textbox.routes';
import { TextboxUsagePage } from './textbox-usage/textbox-usage.page';
import { TextboxReadonlyPage } from './textbox-readonly/textbox-readonly.page';
import { TextboxDisabledPage } from './textbox-disabled/textbox-disabled.page';
import { TextboxDecorationPage } from './textbox-decoration/textbox-decoration.page';
import { TextboxMaskPage } from './textbox-mask/textbox-mask.page';

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
    AXInputMaskModule
    
    
]

const PAGES: any = [
TextboxUsagePage,
TextboxReadonlyPage,
TextboxDisabledPage,
TextboxDecorationPage,
TextboxMaskPage
]


@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class TextboxModule { }