import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertAdditionalPage } from './demos/alert/alert-Additional/alertAdditional.page';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'alert/alert-additional'
  },

  {
    path:'alert/alert-additional',
    component:AlertAdditionalPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
