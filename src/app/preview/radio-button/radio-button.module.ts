import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  AXButtonModule, AXCheckBoxModule, AXFormModule, AXLabelModule, AXRadioModule, AXValidationModule } from '@acorex/components';
import { routes } from './radio-button.routes';
import { SharedModule } from 'src/app/shared/shared.module';
import { RadioButtonUsagePage } from './radio-button-usage/radio-button-usage.page';
import { RadioButtonWithHintPage } from './radio-button-with-hint/radio-button-with-hint.page';
import { RadioButtonDisabledPage } from './radio-button-disabled/radio-button-disabled.page';

const MODULES: any = [
    AXRadioModule,
    AXLabelModule,
    AXFormModule,
]

const PAGES: any = [
   RadioButtonUsagePage,
   RadioButtonWithHintPage,
   RadioButtonDisabledPage
]


@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class RadioButtonModule { }