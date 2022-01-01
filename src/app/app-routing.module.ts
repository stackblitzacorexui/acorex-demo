import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'alert',
    loadChildren: () => import("./preview/alert/alert.module").then(a => a.AlertModule)
  },
  {
    path: 'badge',
    loadChildren: () => import("./preview/badge/badge.module").then(b => b.BadgeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
