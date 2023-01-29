import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopbooksPage } from './topbooks.page';

const routes: Routes = [
  {
    path: '',
    component: TopbooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopbooksPageRoutingModule {}
