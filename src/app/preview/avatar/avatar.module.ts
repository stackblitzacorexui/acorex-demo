import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './avatar.routes';
import {  AXAvatarModule, AXBadgeModule, AXEditorDecoratorModule, AXIconModule } from '@acorex/components';
import { AvatarUsagePage } from './avatar-usage/avatar-usage.page';
import { AvatarSizesPage } from './avatar-sizes/avatar-sizes.page';
import { AvatarAppearancePage } from './avatar-appearance/avatar-appearance.page';
import { AvatarRoundPage } from './avatar-round/avatar-round.page';
import { AvatarGroupPage } from './avatar-group/avatar-group.page';
import { AvatarBadgePage } from './avatar-badge/avatar-badge.page';



const MODULES: any = [
    AXAvatarModule,
    AXBadgeModule,
    AXIconModule,
    AXEditorDecoratorModule,
    
    
]

const PAGES: any = [
  AvatarUsagePage,
  AvatarSizesPage,
  AvatarAppearancePage,
  AvatarRoundPage,
  AvatarGroupPage,
  AvatarBadgePage
]


@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class AvatarModule { }