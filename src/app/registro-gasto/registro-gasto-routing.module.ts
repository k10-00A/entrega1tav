import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroGastoPage } from './registro-gasto.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroGastoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroGastoPageRoutingModule {}
