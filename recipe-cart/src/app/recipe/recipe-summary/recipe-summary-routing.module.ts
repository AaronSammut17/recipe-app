import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeSummaryPage } from './recipe-summary.page';

const routes: Routes = [
  {
    path: '',
    component: RecipeSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeSummaryPageRoutingModule {}
