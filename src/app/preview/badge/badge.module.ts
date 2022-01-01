import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './badge.routes';

import {  AXBadgeModule, AXEditorDecoratorModule, AXIconModule } from '@acorex/components';
import { BadgeAppearancePage } from './badge-appearance/badge-appearance.page';
import { BadgePersonalizePage } from './badge-personalize/badge-personalize.page';
import { BadgeSizesPage } from './badge-sizes/badge-sizes.page';
import { BadgeUsagePage } from './badge-usage/badge-usage.page';



const MODULES: any = [
    AXBadgeModule,
    AXIconModule,
    AXEditorDecoratorModule,
    
]

const PAGES: any = [
   BadgeAppearancePage,
   BadgePersonalizePage,
   BadgeSizesPage,
    BadgeUsagePage
]


@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class BadgeModule { }