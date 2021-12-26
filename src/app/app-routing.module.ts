import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertAdditionalPage } from './demos/alert/alert-additional/alert-additional.page';
import { AlertAppearancePage } from './demos/alert/alert-appearance/alert-appearance.page';
import { AlertButtonsPage } from './demos/alert/alert-buttons/alert-buttons.page';
import { AlertMethodsPage } from './demos/alert/alert-methods/alert-methods.page';
import { AlertRightlinkPage } from './demos/alert/alert-rightlink/alert-rightlink.page';




const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'alert/alert-additional'
  },

  {
    path:'alert/alert-additional',
    component:AlertAdditionalPage
  },
  {
    path:'alert/alert-appearance',
    component:AlertAppearancePage
  },
  {
    path:'alert/alert-buttons',
    component:AlertButtonsPage
  },
  {
    path:'alert/alert-methods',
    component:AlertMethodsPage
  },
  {
    path:'alert/alert-rightlink',
    component:AlertRightlinkPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
