import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresuPageRoutingModule } from './presu-routing.module';

import { PresuPage } from './presu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresuPageRoutingModule
  ],
  declarations: [PresuPage]
})
export class PresuPageModule {}
