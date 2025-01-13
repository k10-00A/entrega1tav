import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresuPage } from './presu.page';

const routes: Routes = [
  {
    path: '',
    component: PresuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresuPageRoutingModule {}
