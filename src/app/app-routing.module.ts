import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertPage } from './demos/alert/alert.page';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'alert'
  },
  {
    path:'alert',
    component:AlertPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
