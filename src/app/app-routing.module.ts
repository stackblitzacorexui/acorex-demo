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
  {
    path: 'select-box',
    loadChildren: () => import("./preview/select-box/select-box.module").then(d => d.SelectBoxModule)
  },
  {
    path: 'selection-list',
    loadChildren: () => import("./preview/selection-list/selection-list.module").then(d => d.SelectListModule)
  },
  {
    path: 'password-box',
    loadChildren: () => import("./preview/password-box/password-box.module").then(d => d.PasswordBoxModule)
  },
  {
    path: 'tab',
    loadChildren: () => import("./preview/tab/tab.module").then(d => d.TabModule)
  },
  {
    path: 'textarea',
    loadChildren: () => import("./preview/textarea/textarea.module").then(d => d.TextareaModule)
  },
  {
    path: 'textbox',
    loadChildren: () => import("./preview/textbox/textbox.module").then(d => d.TextboxModule)
  },
  {
    path: 'timebox',
    loadChildren: () => import("./preview/timebox/timebox.module").then(d => d.TimeboxModule)
  },
  {
    path: 'toast',
    loadChildren: () => import("./preview/toast/toast.module").then(d => d.ToastModule)
  },
  {
    path: 'tree-view',
    loadChildren: () => import("./preview/tree-view/tree-view.module").then(d => d.TreeModule)
  },
  {
    path: 'table',
    loadChildren: () => import("./preview/table/table.module").then(d => d.TableModule)
  },
  {
    path: 'skelton',
    loadChildren: () => import("./preview/skelton/skelton.module").then(d => d.SkeltonModule)
  },
  {
    path: 'rating',
    loadChildren: () => import("./preview/rating/rating.module").then(d => d.RatingModule)
  },
  {
    path: 'radio-button',
    loadChildren: () => import("./preview/radio-button/radio-button.module").then(d => d.RadioButtonModule)
  },
  {
    path: 'progressbar',
    loadChildren: () => import("./preview/progressbar/progressbar.module").then(d => d.ProgressbarModule)
  },
  {
    path: 'avatar',
    loadChildren: () => import("./preview/avatar/avatar.module").then(d => d.AvatarModule)
  },
  {
    path: 'breadcrumbs',
    loadChildren: () => import("./preview/breadcrumbs/breadcrumbs.module").then(d => d.BreadcrumbsnModule)
  },
  {
    path: 'form',
    loadChildren: () => import("./preview/form/form.module").then(d => d.FormModule)
  },
  {
    path: 'menu',
    loadChildren: () => import("./preview/menu/menu.module").then(d => d.MenuModule)
  },
  {
    path: 'popup',
    loadChildren: () => import("./preview/popup/popup.module").then(d => d.PopupModule)
  },
  {
    path: 'collapse',
    loadChildren: () => import("./preview/collapse/collapse.module").then(d => d.CollapseModule)
  },
  {
    path: 'result',
    loadChildren: () => import("./preview/result/result.module").then(d => d.ResultModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
