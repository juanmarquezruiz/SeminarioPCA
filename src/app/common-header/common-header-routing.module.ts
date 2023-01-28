import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonHeaderPage } from './common-header.page';

const routes: Routes = [
  {
    path: '',
    component: CommonHeaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonHeaderPageRoutingModule {}
