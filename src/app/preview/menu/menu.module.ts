import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AXButtonModule, AXLoadingModule, AXMenuModule } from '@acorex/components';
import { routes } from './menu.routes';
import { MenuUsagePage } from './menu-usage/menu-usage.page';

const MODULES: any = [
 AXMenuModule,
 AXLoadingModule
   
]
const PAGES: any = [
MenuUsagePage
]

@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class MenuModule { }