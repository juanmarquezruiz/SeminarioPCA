import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopbooksPageRoutingModule } from './topbooks-routing.module';

import { TopbooksPage } from './topbooks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopbooksPageRoutingModule
  ],
  declarations: [TopbooksPage]
})
export class TopbooksPageModule {}
