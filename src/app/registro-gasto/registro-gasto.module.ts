import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroGastoPageRoutingModule } from './registro-gasto-routing.module';

import { RegistroGastoPage } from './registro-gasto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroGastoPageRoutingModule
  ],
  declarations: [RegistroGastoPage]
})
export class RegistroGastoPageModule {}
