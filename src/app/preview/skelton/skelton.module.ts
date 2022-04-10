import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AXButtonModule, AXLoadingModule } from '@acorex/components';
import { routes } from './skelton.routes';
import { SkeltonUsagePage } from './skelton-usage/skelton-usage.page';
import { SkeltonSimpleModePage } from './skelton-simple-mode/skelton-simple-mode.page';
import { SkeltonAnimationModePage } from './skelton-animatin-mode/skelton-animation-mode.page';



const MODULES: any = [
 AXButtonModule,
 AXLoadingModule
   
]

const PAGES: any = [
SkeltonUsagePage,
SkeltonSimpleModePage,
SkeltonAnimationModePage
]


@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class SkeltonModule { }