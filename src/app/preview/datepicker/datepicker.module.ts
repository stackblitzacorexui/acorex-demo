import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  AXButtonModule, AXCheckBoxModule, AXDatepickerModule, AXEditorDecoratorModule, AXFormModule, AXLabelModule, AXValidationModule } from '@acorex/components';

import { SharedModule } from 'src/app/shared/shared.module';
import { DatepickerUsagePage } from './datepicker-usage/datepicker-usage.page';
import { routes } from './datepicker.routes';
import { DatepickerWithPrefix } from './datepicker-with-prefix/datepicker-with-prefix.page';





const MODULES: any = [
    AXDatepickerModule,
    AXEditorDecoratorModule,
    AXLabelModule,
    AXFormModule,
    AXButtonModule,
    SharedModule
]

const PAGES: any = [
    DatepickerUsagePage,
    DatepickerWithPrefix
]


@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class DatepickerModule { }