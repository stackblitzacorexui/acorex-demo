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

import * as en from '../assets/locale/en.json';
import * as fa from '../assets/locale/fa.json';
import { AXAlertModule } from '@acorex/components';

export function initApp() {
  return () => {
    AXTranslator.load('en', (en as any).default);
    AXTranslator.load('fa', (fa as any).default);
    return new Promise((resolve) => {
      resolve(true);
    });
  };
}


const MODULES: any = [AXCoreModule,AXAlertModule];
const PAGES: any = [AlertAdditionalPage,AlertAppearancePage,AlertButtonsPage,AlertMethodsPage,AlertRightlinkPage];
const SERVICES: any = [AXHotkeysService]

@NgModule({
  declarations: [
    AppComponent,
    ...PAGES
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...MODULES,
  ],
  providers: [
    ...SERVICES,
    { provide: APP_INITIALIZER, useFactory: initApp, multi: true, deps: [] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
