import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './button.routes';
import {  AXBadgeModule, AXButtonModule, AXEditorDecoratorModule, AXIconModule, AXLoadingModule } from '@acorex/components';

import { ButtonAppearancesPage } from "./button-appearances/button-appearances.page";
import { ButtonDecorationPage } from "./button-decoration/button-decoration.page";
import { ButtonDisabledPage } from "./button-disabled/button-disabled.page";
import { ButtonLookPage } from "./button-look/button-look.page";
import { ButtonSizesPage } from "./button-sizes/button-sizes.page";
import { ButtonToggleablePage } from "./button-toggleable/button-toggleable.page";
import { ButtonUsagePage } from "./button-usage/button-usage.page";




const MODULES: any = [
    AXButtonModule,
    AXIconModule,
    AXEditorDecoratorModule,
    AXBadgeModule,
    AXLoadingModule
]

const PAGES: any = [
  ButtonUsagePage,
  ButtonAppearancesPage,
  ButtonDecorationPage,
  ButtonDisabledPage,
  ButtonLookPage,
  ButtonSizesPage,
  ButtonToggleablePage
]


@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class ButtonModule { }