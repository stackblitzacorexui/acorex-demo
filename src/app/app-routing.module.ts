import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertPage } from './demos/alert/alert.page';
import { AlertAdditionalPage } from './demos/alert/alertAdditional/alertAdditional.page';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'alert'
  },
  {
    path:'alert',
    component:AlertPage
  },
  {
    path:'alertAdditional',
    component:AlertAdditionalPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
