import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePage

  },
  {
    path: 'alert',
    loadChildren: () => import("./preview/alert/alert.module").then(a => a.AlertModule)
  },
  {
    path: 'badge',
    loadChildren: () => import("./preview/badge/badge.module").then(b => b.BadgeModule)
  },
  {
    path: 'button',
    loadChildren: () => import("./preview/button/button.module").then(b => b.ButtonModule)
  },
  {
    path: 'button-group',
    loadChildren: () => import("./preview/button-group/button-group.module").then(b => b.ButtonGroupModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import("./preview/calendar/calendar.module").then(c => c.CaledarModule)
  },
  {
    path: 'checkbox',
    loadChildren: () => import("./preview/checkbox/checkbox.module").then(c => c.CheckboxModule)
  },
  {
    path: 'datepicker',
    loadChildren: () => import("./preview/datepicker/datepicker.module").then(d => d.DatepickerModule)
  },
  {
    path: 'dialog',
    loadChildren: () => import("./preview/dialog/dialog.module").then(d => d.DialogModule)
  },
  {
    path: 'switch',
    loadChildren: () => import("./preview/switch/switch.module").then(d => d.SwitchModule)
  },
  {
    path: 'number-box',
    loadChildren: () => import("./preview/number-box/number-box.module").then(d => d.NumberBoxModule)
  },
  {
    path: 'dropdown-button',
    loadChildren: () => import("./preview/dropdown-button/dropdown-button.module").then(d => d.DropdownButtonModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
