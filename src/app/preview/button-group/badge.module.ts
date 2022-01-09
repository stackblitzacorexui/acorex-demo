import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {  AXBadgeModule, AXButtonModule, AXEditorDecoratorModule, AXIconModule } from '@acorex/components';
import { routes } from './button-group.routes';
import { ButtonGroupUsage } from './button-group-usage/button-group-usage.page';
import { ButtonGroupSingle } from './button-group-single/button-group-single.page';
import { ButtonGroupMultiple } from './button-group-multiple/button-group-multiple.page';



const MODULES: any = [
    AXButtonModule,
    AXIconModule,
    AXEditorDecoratorModule,
    
]

const PAGES: any = [
    ButtonGroupUsage,
    ButtonGroupSingle,
    ButtonGroupMultiple
]


@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class ButtonGroupModule { }