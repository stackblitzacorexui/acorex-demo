import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  AXBadgeModule, AXEditorDecoratorModule, AXIconModule, AXLoadingModule, AXSwitchModule } from '@acorex/components';
import { routes } from './switch.routes';
import { SwitchUsagePage } from './switch-usage/switch-usage.page';
import { SwitchAppearancesPage } from './switch-appearances/switch-appearances.page';
import { SwitchReadonlyPage } from './switch-readonly/switch-readonly.page';
import { SwitchDisabledPage } from './switch-disabled/switch-disabled.page';
import { SwitchDecorationPage } from './switch-decoration/switch-decoration.page';
import { SwitchLoadingPage } from './switch-loading/switch-loading.page';
import { SwitchSizesPage } from './switch-sizes/switch-sizes.page';




const MODULES: any = [
    AXIconModule,
    AXEditorDecoratorModule,
    AXBadgeModule,
    AXLoadingModule,
    AXSwitchModule
]

const PAGES: any = [
    SwitchUsagePage,
    SwitchAppearancesPage,
    SwitchDisabledPage,
    SwitchReadonlyPage,
    SwitchDecorationPage,
    SwitchLoadingPage,
    SwitchSizesPage
]


@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class SwitchModule { }