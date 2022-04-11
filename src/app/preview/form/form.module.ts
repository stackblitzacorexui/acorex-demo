import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AXButtonModule, AXCheckBoxModule, AXEditorDecoratorModule, AXFormModule, AXLabelModule, AXLoadingModule, AXPageModule, AXSelectBoxModule, AXTextBoxModule, AXValidationModule } from '@acorex/components';
import { routes } from './form.routes';
import { FormUsagePage } from './form-usage/form-usage.page';

const MODULES: any = [
 AXFormModule,
 AXLabelModule,   
 AXButtonModule,
 AXLoadingModule,
 AXValidationModule,
 AXTextBoxModule,
 AXTextBoxModule,
 AXEditorDecoratorModule,
 AXCheckBoxModule,
 AXPageModule,
 AXSelectBoxModule,
 AXPageModule

]

const PAGES: any = [
FormUsagePage
]


@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class FormModule { }