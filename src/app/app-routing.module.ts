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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
