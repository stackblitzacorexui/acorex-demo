import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  AXButtonModule, AXCheckBoxModule, AXEditorDecoratorModule, AXFormModule, AXLabelModule, AXProgressBarModule, AXRadioModule, AXValidationModule } from '@acorex/components';
import { routes } from './progressbar.routes';
import { ProgressbarUsagePage } from './progressbar-usage/progressbar-usage.page';
import { ProgressbarDecorationPage } from './progressbar-decoration/progressbar-decoration.page';


const MODULES: any = [
   AXProgressBarModule,
    AXFormModule,
    AXEditorDecoratorModule
]

const PAGES: any = [
ProgressbarUsagePage,
ProgressbarDecorationPage
]


@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class ProgressbarModule { }