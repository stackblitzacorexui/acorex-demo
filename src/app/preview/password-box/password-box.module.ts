import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  AXLabelModule, AXPasswordBoxModule } from '@acorex/components';
import { routes } from './password-box.routes';
import { PasswordBoxShowToggleButtonPage } from './password-box-show-toggle-button/password-box-show-toggle-button.page';




const MODULES: any = [
    AXLabelModule,
    AXPasswordBoxModule
]

const PAGES: any = [
  PasswordBoxShowToggleButtonPage
]


@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class PasswordBoxModule { }