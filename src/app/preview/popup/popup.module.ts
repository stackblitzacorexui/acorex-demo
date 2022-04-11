import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  AXButtonModule, AXEditorDecoratorModule, AXFormModule, AXLabelModule, AXPasswordBoxModule, AXSelectBoxComponent, AXSelectBoxModule, AXTextBoxComponent, AXTextBoxModule, AXValidationModule } from '@acorex/components';
import { routes } from './popup.routes';
import { PopUpSize } from './popup-sizes/popup-size';

const MODULES: any = [
    AXTextBoxComponent,
    AXSelectBoxModule,
    AXLabelModule,
    AXFormModule,
    AXButtonModule,
    AXValidationModule,
    AXTextBoxModule,
   AXEditorDecoratorModule
    
]

const PAGES: any = [
    PopUpSize
]


@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class PopupModule { }