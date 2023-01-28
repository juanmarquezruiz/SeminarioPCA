import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommonHeaderPageRoutingModule } from './common-header-routing.module';

import { CommonHeaderPage } from './common-header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonHeaderPageRoutingModule
  ],
  declarations: [CommonHeaderPage],
  exports:[CommonHeaderPage]
})

export class CommonHeaderPageModule {}
//export { CommonHeaderPage };

