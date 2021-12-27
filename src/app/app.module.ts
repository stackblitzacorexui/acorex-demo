import { AXCoreModule, AXHotkeysService, AXTranslator } from '@acorex/core';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertAdditionalPage } from './demos/alert/alert-additional/alert-additional.page';
import { AlertAppearancePage } from './demos/alert/alert-appearance/alert-appearance.page';
import { AlertButtonsPage } from './demos/alert/alert-buttons/alert-buttons.page';
import { AlertMethodsPage } from './demos/alert/alert-methods/alert-methods.page';
import { AlertRightlinkPage } from './demos/alert/alert-rightlink/alert-rightlink.page';
import { BadgeColorsPage } from './demos/badge/badge-colors/badge.colors.page';
import { BadgeCustomePage } from './demos/badge/badge-custom/badge-custom.page';
import { BadgeImportPage } from './demos/badge/badge-import/badge-import.page';
import { BadgePrefixPage } from './demos/badge/badge-prefix/badge-prefix.page';
import { BadgeSuffixPage } from './demos/badge/badge-suffix/badge-suffix.page';
import { ButtonAppearancesPage } from './demos/button/button-appearances/button-appearances.page';
import { ButtonDecorationPage } from './demos/button/button-decoration/button-decoration.page';
import { ButtonDisabledPage } from './demos/button/button-disabled/button-disabled.page';
import { ButtonSizesPage } from './demos/button/button-sizes/button-sizes.page';

import * as en from '../assets/locale/en.json';
import * as fa from '../assets/locale/fa.json';
import {
  AXAlertModule,
  AXBadgeModule,
  AXEditorDecoratorModule,
  AXIconModule,
  AXLoadingModule,
  AXButtonModule,
} from '@acorex/components';

import { BadgeSizePage } from './demos/badge/badge-size/badge-size.page';
import { ButtonGroupBasic } from './demos/button-group/button-group-basic/button-group-basic.page';
import { ButtonGroupMulti } from './demos/button-group/button-group-multi/button-group-multi.page';
import { ButtonGroupSingle } from './demos/button-group/button-group-single/button-group-single.page';

import { ButtonToggleablePage } from './demos/button/button-toggleable/button-toggleable.page';

export function initApp() {
  return () => {
    AXTranslator.load('en', (en as any).default);
    AXTranslator.load('fa', (fa as any).default);
    return new Promise((resolve) => {
      resolve(true);
    });
  };
}

const MODULES: any = [
  AXCoreModule,
  AXAlertModule,
  AXBadgeModule,
  AXIconModule,
  AXEditorDecoratorModule,
  AXIconModule,
  AXButtonModule,
  AXLoadingModule,
  AXCoreModule,
  AXAlertModule,
  AXCoreModule,
  AXAlertModule,
  AXBadgeModule,
  AXIconModule,
  AXEditorDecoratorModule,
  AXButtonModule,
];
const PAGES: any = [
  AlertAdditionalPage,
  AlertAppearancePage,
  AlertButtonsPage,
  AlertMethodsPage,
  AlertRightlinkPage,
  BadgeColorsPage,
  BadgeCustomePage,
  BadgeImportPage,
  BadgePrefixPage,
  BadgeSuffixPage,
  BadgeSizePage,
  ButtonAppearancesPage,
  ButtonDecorationPage,
  ButtonDisabledPage,
  ButtonSizesPage,
  ButtonToggleablePage,
  AlertAdditionalPage,
  AlertAppearancePage,
  AlertButtonsPage,
  AlertMethodsPage,
  AlertRightlinkPage,
  ButtonGroupBasic,
  ButtonGroupMulti,
  ButtonGroupSingle,
];

const SERVICES: any = [AXHotkeysService];

@NgModule({
  declarations: [AppComponent, ...PAGES],
  imports: [BrowserModule, AppRoutingModule, ...MODULES],
  providers: [
    ...SERVICES,
    { provide: APP_INITIALIZER, useFactory: initApp, multi: true, deps: [] },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
