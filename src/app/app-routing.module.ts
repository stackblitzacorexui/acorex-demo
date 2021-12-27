import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertAdditionalPage } from './demos/alert/alert-additional/alert-additional.page';
import { AlertAppearancePage } from './demos/alert/alert-appearance/alert-appearance.page';
import { AlertButtonsPage } from './demos/alert/alert-buttons/alert-buttons.page';
import { AlertMethodsPage } from './demos/alert/alert-methods/alert-methods.page';
import { AlertRightlinkPage } from './demos/alert/alert-rightlink/alert-rightlink.page';
import { BadgeColorsPage } from './demos/badge/badge-colors/badge.colors.page';
import { BadgeCustomePage } from './demos/badge/badge-custom/badge-custom.page';
import { BadgePrefixPage } from './demos/badge/badge-prefix/badge-prefix.page';
import { BadgeImportPage } from './demos/badge/badge-import/badge-import.page';
import { BadgeSuffixPage } from './demos/badge/badge-suffix/badge-suffix.page';
import { BadgeSizePage } from './demos/badge/badge-size/badge-size.page';
import { ButtonGroupSingle } from './demos/button-group/button-group-single/button-group-single.page';
import { ButtonGroupBasic } from './demos/button-group/button-group-basic/button-group-basic.page';
import { ButtonGroupMulti } from './demos/button-group/button-group-multi/button-group-multi.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'alert/alert-additional',
  },

  {
    path: 'alert/alert-additional',
    component: AlertAdditionalPage,
  },
  {
    path: 'alert/alert-appearance',
    component: AlertAppearancePage,
  },
  {
    path: 'alert/alert-buttons',
    component: AlertButtonsPage,
  },
  {
    path: 'alert/alert-methods',
    component: AlertMethodsPage,
  },
  {
    path: 'alert/alert-rightlink',
    component: AlertRightlinkPage,
  },
  {
    path: 'badge/badge-colors',
    component: BadgeColorsPage,
  },
  {
    path: 'badge/badge-custom',
    component: BadgeCustomePage,
  },
  {
    path: 'badge/badge-prefix',
    component: BadgePrefixPage,
  },
  {
    path: 'badge/badge-import',
    component: BadgeImportPage,
  },
  {
    path: 'badge/badge-suffix',
    component: BadgeSuffixPage,
  },
  {
    path: 'badge/badge-size',
    component: BadgeSizePage,
  },
  {
    path: 'button-group/button-group-single',
    component: ButtonGroupSingle,
  },
  {
    path: 'button-group/button-group-basic',
    component: ButtonGroupBasic,
  },
  {
    path: 'button-group/button-group-multi',
    component: ButtonGroupMulti,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
