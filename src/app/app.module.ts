import { AXCoreModule, AXHotkeysService, AXTranslator } from '@acorex/core';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as en from '../assets/locale/en.json';
import * as fa from '../assets/locale/fa.json';

import {
  AXBadgeModule,
  AXLoadingModule,
  AXButtonModule,
} from '@acorex/components';



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
  AXBadgeModule,
  AXButtonModule,
  AXLoadingModule,
  AXCoreModule,
];


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ...MODULES],
  providers: [
    { provide: APP_INITIALIZER, useFactory: initApp, multi: true, deps: [] },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
